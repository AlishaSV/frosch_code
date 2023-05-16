import React from 'react'
import * as Yup from 'yup'

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
  .email()
  .min(2, 'Must be longer than 2 characters')
  .max(50, 'Exceeded the quantity of characters allowed')
  .required('Required'),
  password: Yup.string()
  .min(8, 'Must be longer than 8 characters')
  .required('Required')
})
export default loginFormSchema