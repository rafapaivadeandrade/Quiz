import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import Users from "../../../models/User";
import dbConnect from "../../../lib/db";

dbConnect();

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
      const response = await Users.find();
      res.status(201).send(response); 
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, acceptTerms } = req.body;
    try{
      const userExists = await Users.findOne({ email: email });

      if (userExists.email) {
        return res.status(400).send({ message: 'Participante já cadastrado.' });
      }
    }
    catch(err){
        const response = await Users.create({
          name,
          email,
          acceptTerms,
        });
        return res.status(201).json({response});
    }
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      userId,
      rating_score,
      duration_action,
    } = req.body;
    try {
      const user = await Users.updateOne({ _id: userId }, {points: rating_score,
          duration_action: duration_action});
    
      res.status(200).json(user);
    } catch (err) {

      return res.status(400).json({
        error: "Unexpected error while updating new user",
      });
    }
  })

export default handler;
