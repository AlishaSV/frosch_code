import React from 'react'
import styles from './CommonFormikField.module.css'
import { Field } from 'formik'

const CommonFormikField = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        meta: { touched, error }
      }) => (
        <div>
          <input
            className={touched && error ? styles.errors : styles.inputStyle}
            type={type}
            placeholder={placeholder}
            {...field}
          />
          {touched && error && (
            <div className={styles.errorsMessage}>{error}</div>
          )}
        </div>
      )}
    </Field>
  )
}

export default CommonFormikField
