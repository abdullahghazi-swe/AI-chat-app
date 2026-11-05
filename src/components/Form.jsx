export default function Form(props) {

    function handleMessages(formData) {
        const message = formData.get('message');

        const newMessage = {
            sender: 'user',
            text: message
        }
        props.addMessage(msgs => [...msgs, newMessage]);
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