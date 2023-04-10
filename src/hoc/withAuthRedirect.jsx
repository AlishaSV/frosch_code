import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
  const { isAuth } = state.auth?.authData
  return { isAuth }
}

export function withAuthRedirect (Component) {
  function ComponentWithAuthRedirect (props) {
    const navigate = useNavigate()
    useEffect(() => {
      if (props.isAuth === false) {
        navigate('/login')
      }
    }, [props.isAuth, navigate])
    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect)(ComponentWithAuthRedirect)
}
