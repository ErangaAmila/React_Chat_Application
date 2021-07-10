import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="dd504936-e3e4-4c3b-8f46-9ef16d64b973"
            userName="eranga987@gmail.com"
            userSecret="Amila123456789"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}

        />
    );
}

export default App;