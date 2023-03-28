import { changeMessageInputActionCreator, sendMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer