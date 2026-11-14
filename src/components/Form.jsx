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
        formRef.current.style.height = "auto";
        inputField.current.blur();
    }

    function makeFocus(e) {
        if (e.target.closest("button")) return;

        inputField.current?.focus()
        
    }

    function dynamicHeight() {
        const formBox = formRef.current.getBoundingClientRect();
        const inputBox = inputField.current.getBoundingClientRect();
        
        const currentHeight = formBox.height;
        
        const moreLine = inputBox.height > currentHeight - 30;
        const lessLine = currentHeight - inputBox.height > 40;

        if (lessLine || moreLine) {
            formRef.current.style.height = `${inputBox.height + 32}px`;
        }
    }

    function handleKey(e) {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (e.key !== "Enter" || e.shiftKey || isMobile) return;

        e.preventDefault();
        e.currentTarget.form?.requestSubmit();
    }

    return (
        <div className={`form-box ${props.noMessages ? 'form-start': 'form-fixed'}`}>
            <form ref={formRef} onClick={makeFocus} action={handleMessages}>
                <textarea onKeyDown={handleKey} onInput={dynamicHeight} ref={inputField} type="text" name="message" placeholder="Ask AI" className="prompt-area" />
                <button>↑</button>
            </form>
        </div>
    )
}