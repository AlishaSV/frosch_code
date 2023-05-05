import React from 'react'
import { Field, Form, Formik } from 'formik'

const PostsForm = (props) => {
  let newPost = (values) => {
    props.changePostInput(values)
  }

  return (
    <Formik
      initialValues={{
        newPostBody: ''
      }}
      onSubmit={(values, { resetForm }) => {
        newPost(values.newPostBody)
        console.log(values)
        resetForm({ values: '' })
      }
      }
    >
      {() => (
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
      )}
    </Formik>
  )
}

export default PostsForm