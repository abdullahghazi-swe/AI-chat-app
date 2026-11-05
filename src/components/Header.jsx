export default function Header(props) {

    function clearChat() {
        props.messageSetter([]);
    }

    return (
        <header>
            <div className="logo">AI Chat</div>
            <div className="options">
                <button className="new-chat" onClick={clearChat}>🖊️ New Chat</button>
                <button className="setting">⚙️</button>
            </div>
        </header>
    )
}