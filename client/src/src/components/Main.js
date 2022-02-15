import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import AuthForm from './authForm';
import {authUser} from '../store/actions/auth';

const Main = (props)=>{
        const {authUser} = props;
        return (<div className='container'>
        <Switch>
            <Route exact path="/" render={(props) =><HomePage {...props} />}/>
            <Route exact path="/signin" render={(props) =><AuthForm buttonText="Login"
                heading="Welcome back.!"
                onAuth={authUser}
                {...props} 
                />}
            />
            <Route exact path="/signup" render={(props) =><AuthForm buttonText="Signin"
                heading="Join Warbler.!"
                signUp
                onAuth={authUser}
                {...props} 
                />}
            />
        </Switch>
    </div>);
}


function mapStatetoProps(state){
    return {
        currentUser: state.currentUser
    };
}
export default withRouter(connect(mapStatetoProps, { authUser })(Main));