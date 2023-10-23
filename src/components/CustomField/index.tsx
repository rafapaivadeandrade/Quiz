import React from "react"
import { useField, FieldAttributes } from "formik"
import { Container, Error } from "./styles"

const CustomField: React.FC<FieldAttributes<any>> = ({ ...props }) => {
  const [, meta] = useField(props)

  return (
    <>
      <Container
        iserroed={meta.error}
        isfocused={meta.touched ? meta.touched : undefined}
        {...props}
      />
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  )
}

export default CustomField
