import Form from "./Form"

export default function Main({messages, setMessages}) {

    const noMessages = messages.length == 0;
    return (
        <main>
            {!noMessages && <section className="message-box"> {messages[0].text}</section>}
            { noMessages && <h3>What would you like to learn today?</h3>}
            <Form addMessage={setMessages} noMessages={noMessages} />
        </main>
    )
}