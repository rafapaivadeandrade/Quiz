import nc from "next-connect"
import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()

export async function close() {
  await prisma.$disconnect()
}

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  acceptTerms: z.string(),
})

const updateUserSchema = z.object({
  userId: z.number(),
  rating_score: z.number(),
  duration_action: z.string(),
})

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (_: NextApiRequest, res: NextApiResponse) => {
    try {
      const users = await prisma.user.findMany({
        orderBy: [{ points: "desc" }, { durationAction: "asc" }],
      })
      return res.status(201).json(users)
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" })
    } finally {
      // Disconnect from the Prisma client
      await close()
    }
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const requestData = createUserSchema.parse(req.body)
      const userExists = await prisma.user.findFirst({
        where: {
          email: requestData.email, // Search by email
        },
      })

      if (userExists) {
        return res
          .status(400)
          .json({ message: "Participant already registered." })
      }

      const user = await prisma.user.create({
        data: {
          name: requestData.name,
          email: requestData.email,
          acceptTerms: requestData.acceptTerms,
        },
      })

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" })
    } finally {
      // Disconnect from the Prisma client
      await close()
    }
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const requestData = updateUserSchema.parse(req.body)

      const updatedUser = await prisma.user.update({
        where: {
          id: requestData.userId,
        },
        data: {
          points: requestData.rating_score,
          durationAction: requestData.duration_action,
        },
      })
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" })
    } finally {
      // Disconnect from the Prisma client
      await close()
    }
  })

export default handler
