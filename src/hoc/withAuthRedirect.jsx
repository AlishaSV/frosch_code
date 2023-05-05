import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
  const { isAuth, isLoading } = state.auth?.authData
  return { isAuth, isLoading }
}

export function withAuthRedirect (Component) {
  function ComponentWithAuthRedirect (props) {
    const navigate = useNavigate()
    useEffect(() => {
      if (!props.isLoading && props.isAuth === false) {
        navigate('/login')
      }
    }, [props.isAuth, navigate])
    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect)(ComponentWithAuthRedirect)
}
