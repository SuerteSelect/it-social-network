import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }
    return <div className={s.dialog}>
        <div> {props.message}</div>

    </div>
};

export default Message;