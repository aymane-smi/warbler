import React from 'react';
import defaultImage from '../images/default-profile-image.jpg';

const UserAside = ({profileImageUrl, username})=>{
    return (<aside className="col-sm-2">
    <div className="panel panel-default">
        <div className="panel-body">
            <img src={profileImageUrl || defaultImage} alt={username} height="150" width="150" className="img-tumbnail"/>
        </div>
    </div>
</aside>);
}

export default UserAside;