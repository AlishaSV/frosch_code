import { changeMessageInputActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
  const { dialogsData, messagesData } = state.dialogsPage
  return {
    dialogsData,
    messagesData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessageInput: (messageInput) => {
      dispatch(changeMessageInputActionCreator(messageInput))
    },
    sendMessage: (messageInput) => {
      dispatch(sendMessageActionCreator(messageInput))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)