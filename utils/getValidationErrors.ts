export default function getValidationErrors(err: any) {
  const validationErros: any = {};

  err.inner.forEach((error: any) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
