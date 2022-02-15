import React from 'react';
import {Link} from 'react-router-dom';
// import MessageTimeline from './MessageTimeline';

const HomePage = () => {
//   if(!currentUser.isAuthenticated){
    
//   }
//   return (
//     <div>
//       <MessageTimeline profileImageUrl={currentUser.profileImageUrl} username={currentUser.user.username}/>
//     </div>
//   )
return(
    <div className="home-hero">
      <h1>What's Happening?</h1>
      <h4>New to Warbler?</h4>
      <Link to="/signup" className="btn btn-primary">Sign Up Here</Link>
    </div>
  )
};

export default HomePage;