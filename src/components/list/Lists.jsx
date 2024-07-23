import "./lists.css";
import ChatList from "./chatList/ChatList";
import Userinfo from "./userInfo/Userinfo";

const Lists = () => {
    return (
        <div className="lists">
            <Userinfo />
            <ChatList />
        </div>
    );
};

export default Lists;
