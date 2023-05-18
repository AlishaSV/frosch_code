import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
  const { isAuth, isLoading } = state.auth?.authData
  return { isAuth, isLoading }
}

export function withAuthRedirect (Component) {
  function ComponentWithAuthRedirect (props) {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      if (!props.isLoading && props.isAuth === false) {
        navigate('/login')
      }
      if (props.isAuth && location.pathname === '/login') {
        navigate('/profile')
      }
    }, [props.isAuth, navigate])

    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect)(ComponentWithAuthRedirect)
}
