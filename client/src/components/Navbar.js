import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../images/warbler-logo.png'
import {logout} from '../store/actions/auth';
class NavBar extends Component{
    render(){
        const logout = (evt)=>{
            evt.preventDefault();
            this.props.logout();
        };
        const {currentUser} = this.props;
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="brand"/>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {currentUser.isAuthanticated ? (
                            <>
                                <li>
                                    <Link to={`/users/${currentUser.user.id}/message/new`}>New Message</Link>
                                </li>
                                <li>
                                    <a onClick={logout}>Logout</a>
                                </li>
                            </>
                        ): (
                            <>
                                <li>
                                    <Link to="/signup">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/signin">Sign In</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStatetoProps(state){
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStatetoProps, {logout})(NavBar);