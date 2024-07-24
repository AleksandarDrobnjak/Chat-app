import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const hendleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };
    console.log(text);

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <span>Aleksandar Drobnjak</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="video.png" alt="" />
                    <img src="info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />

                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <img src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg" alt="" />
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message ">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem perferendis mollitia labore numquam,
                            repellat fugit animi tempore, quo id delectus
                            incidunt, optio cupiditate placeat doloribus! Nemo
                            at laboriosam voluptatem magnam!
                        </p>
                        <span>1 min ago </span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="img.png" alt="" />
                    <img src="camera.png" alt="" />
                    <img src="mic.png" alt="" />
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <div className="emoji">
                    <img
                        src="./emoji.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={hendleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
};

export default Chat;
