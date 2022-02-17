import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import defaultImage from '../images/default-profile-image.jpg';

const MessageItem = ({text, date, profileImageUrl, username, remove, button})=>{
    return (
        <li className="list-group-item">
            <div className="style">
                <img src={profileImageUrl || defaultImage} alt={username} height="100" width="100"/>
                <div className="message-area">
                    <div className="not-flex">
                        <Link to="/">@{username}</Link>
                        <span className="text-muted">
                            <Moment className="text-muted" format="DD MM YYYY">
                                {date}
                            </Moment>
                        </span>
                    </div>
                    <p className="float-right">
                            {text}
                    </p>
                    {button && <button className="btn btn-sm btn-danger" onClick={remove}>remove</button>}
                </div>
            </div>
        </li>
    );
}

export default MessageItem;