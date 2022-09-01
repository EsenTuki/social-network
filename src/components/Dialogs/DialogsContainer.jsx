import React from "react"
import Dialogs from "./Dialogs"
import { connect } from 'react-redux'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer'

let mapStateToProps = (state) => {
    return{
        dialogsPage:state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;