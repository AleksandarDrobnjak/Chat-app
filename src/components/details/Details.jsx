import "./details.css";

const Details = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Alekdandar Drobnjak</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privace & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/19378027/pexels-photo-19378027/free-photo-of-portrait-of-brunette-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                        <img src="download.png" alt="" className="icon"/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/19378027/pexels-photo-19378027/free-photo-of-portrait-of-brunette-woman-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt=""
                            />
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                        <img src="download.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" className=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    );
};

export default Details;
