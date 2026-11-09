export default function Message(props) {
    return (
        <div className={props.message.sender === "user" ? "message user": "message"}>
            <div className={props.message.sender === "user" ? "content user": "content"}>
                {props.message.content}
            </div>
        </div>
    )
}