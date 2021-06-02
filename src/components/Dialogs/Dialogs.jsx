import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DiallogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea}
                        name='newMessageBody'
                        placeholder='Enter your message'
                        validate={[required, maxLength50]} />

                </div>
                <div><button>Send</button></div>

            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody='';
    }
    let state = props.dialogsPage;

    let messagesElements = state.messages
        .map(messageEl => <Message message={messageEl.message} key={messageEl.id} id={messageEl.id} />);

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsElements
                }


            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>

                <AddMessageFormRedux onSubmit={addNewMessage} />


            </div>
        </div>)
};

export default Dialogs;