import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DiealogItem/DialogsItem";
import Message from './Message/Message'
import {Navigate } from 'react-router-dom'

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d, index) => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = state.messages.map((m, index) => <Message key={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea 
                    value={newMessageBody} 
                    placeholder="Enter your message"
                    onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;