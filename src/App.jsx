import "./App.css";
import Chat from "./components/chat/Chat";
import Lists from "./components/list/Lists";
import Details from "./components/details/Details";

function App() {
    return (
        <div className="conatiner">
            <Lists />
            <Chat />
            <Details />
        </div>
    );
}

export default App;
