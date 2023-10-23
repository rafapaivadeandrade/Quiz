import React from "react"
import { Error } from "./styles"
import { useField, Field } from "formik"
import Link from "next/link"
import styles from "./Checkbox.module.scss"
interface CheckboxOption {
  id: string
  value: string
  label: string
}

const CheckboxInput: React.FC<{
  name: string
  setShowModal?: any
}> = ({ ...props }) => {
  const [, meta] = useField(props)
  let link = "http://pfizer.com.br/politica-de-privacidade"
  const checkboxTerms: CheckboxOption[] = [
    {
      id: "terms",
      value: "Accepted Terms",
      label: `Accept Terms`,
    },
  ]

  return (
    <div
      className={
        meta.touched && meta.error
          ? styles.styledinputsingleerror
          : styles.styledinputsingle
      }
    >
      {checkboxTerms.map(option => (
        <>
          <Field
            name={`${props.name}`}
            render={({ field }: any) => (
              <input
                {...field}
                type="radio"
                id={option.id}
                name={props.name}
                value={option.value}
              />
            )}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{
                color: "#043673",
                width: 500,
                fontWeight: "bold",
                fontSize: 28,
              }}
              htmlFor={option.id}
              key={option.id}
            >
              {option.label}
              {/* <Link
                href={`${link}`}
                passHref={true}
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  color: "#043673",
                  width: 500,
                  fontWeight: "bold",
                  fontSize: 28,
                }}
              ></Link> */}
            </label>
            {meta.touched && meta.error && <Error>{meta.error}</Error>}
          </div>
        </>
      ))}
    </div>
  )
}

export default CheckboxInput
