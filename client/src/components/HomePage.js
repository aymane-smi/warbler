import React from 'react';
import {Link} from 'react-router-dom';
import MessagesTimeLine from "./MessagesTimeLine";
import UserAside from './UserAside';
const HomePage = ({currentUser}) => {
  if(!currentUser.isAuthanticated){
    return(
      <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">Sign Up Here</Link>
      </div>
    )
  }else{
    return (<>
      <UserAside profileImageUrl={currentUser.user.profileImageUrl}
                 username={currentUser.user.username}
      />
        <MessagesTimeLine />
        </>);
  }
};

export default HomePage;