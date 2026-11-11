import { useRef } from "react";
import { getResponse } from "../services/api";

export default function Form(props) {

    const inputField = useRef(null);
    const formRef = useRef(null);

    async function handleMessages(formData) {
        const value = formData.get('message');

        const message = value.trim();
        if (!message) {
            return;
        }

        const newMessage = {
            sender: 'user',
            content: message
        }
        props.addMessage(msgs => [...msgs, newMessage]);
        const response = getResponse(newMessage);
        props.addMessage(msgs => [...msgs, response]);

        dynamicHeight();
    }

    function makeFocus() {
        if (inputField.current) {
            inputField.current.focus()
        }
    }

    function dynamicHeight() {
        const formBox = formRef.current.getBoundingClientRect();
        const inputBox = inputField.current;
        
        const currentHeight = formBox.height;

        const moreLine = inputBox.scrollHeight > currentHeight - 30;
        const lessLine = currentHeight - inputBox.scrollHeight > 40;

        if (lessLine || moreLine) {
            formRef.current.style.height = `${inputBox.scrollHeight + 32}px`;
        }
    }

    return (
        <div className={`form-box ${props.noMessages ? 'form-start': 'form-fixed'}`}>
            <form ref={formRef} onClick={makeFocus} action={handleMessages}>
                <textarea onInput={dynamicHeight} ref={inputField} type="text" name="message" placeholder="Ask AI" className={`prompt-area ${props.noMessages ? '': 'fixed'}`} />
                <button>↑</button>
            </form>
        </div>
    )
}