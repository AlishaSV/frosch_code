import React from 'react'
import { Field, Form, Formik } from 'formik'

const MessageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values)
  }

  return (
    <Formik
      initialValues={{
        newMessageBody: ''
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody)
        console.log(values)
        resetForm({ values: '' })
      }
      }
    >
      {() => (
        <Form>
          <div>
            <Field
              name={'newMessageBody'}
              as={'textarea'}
              placeholder={'enter text'}
            />
          </div>

          <button type={'submit'}>Send</button>
        </Form>
      )}
    </Formik>
  )
}

export default MessageForm