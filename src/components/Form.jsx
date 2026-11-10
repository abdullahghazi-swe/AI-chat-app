import { getResponse } from "../services/api";

export default function Form(props) {

    async function handleMessages(formData) {
        const message = formData.get('message');

        if (!message || message.trim() == '') {
            return;
        }

        const newMessage = {
            sender: 'user',
            content: message
        }
        props.addMessage(msgs => [...msgs, newMessage]);
        const response = getResponse(newMessage);
        props.addMessage(msgs => [...msgs, response]);
    }

    return (
        <div className={`form-box ${props.noMessages ? 'form-start': 'form-fixed'}`}>
            <form action={handleMessages}>
                <input type="text" name="message" placeholder="Ask AI" autoComplete="off"/>
                <button>↑</button>
            </form>
        </div>
    )
}