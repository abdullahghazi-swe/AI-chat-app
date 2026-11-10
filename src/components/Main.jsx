import Form from "./Form"
import Message from "./Message";

export default function Main({messages, setMessages}) {

    const noMessages = messages.length == 0;
    
    const messageList = messages.map(msg => <Message message={msg} />)

    return (
        <main>
            <section className="main-content">
                {!noMessages && <section className="message-box"> {messageList}</section>}
                { noMessages && <h3>What would you like to learn today?</h3>}
                <Form addMessage={setMessages} noMessages={noMessages} />
            </section>
        </main>
    )
}