import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow 
            projectId="afee7d06-e480-41d9-a1b0-eb98cbb0d07f"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100vh' }}
        />
    </div>
    )
}
export default ChatsPage