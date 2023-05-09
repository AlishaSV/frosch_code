import React from 'react'
import { Field, Form, Formik } from 'formik'

const PostsForm = ({ addPost }) => {

  return (
    <Formik
      initialValues={{
        newPostBody: ''
      }}
      onSubmit={
        (values, { resetForm }) => {
          addPost(values.newPostBody)
          resetForm({ values: '' })
        }
      }
    >
      <Form>
        <div>
          <Field
            name={'newPostBody'}
            as={'textarea'}
            placeholder={'enter text'}
          />
        </div>

        <button type={'submit'}>Add post</button>
      </Form>
    </Formik>
  )
}

export default PostsForm