import React, {Component} from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import AuthForm from './authForm';
import {authUser} from '../store/actions/auth';
import { removeError } from '../store/actions/error';
import MessageForm from './MessageForm';
import withAuth from '../hocs/withAuth';
const Main = (props)=>{
        const {authUser, errors, removeError, currentUser} = props;
        const NewComponent = withAuth(MessageForm);
        return (<div className='container'>
        <Switch>
            <Route exact path="/" render={(props) =><HomePage currentUser={currentUser} {...props} />}/>
            <Route exact path="/signin" render={(props) =><AuthForm buttonText="Login"
                heading="Welcome back.!"
                errors={errors.message}
                remove={removeError}
                onAuth={authUser}
                {...props} 
                />}
            />
            <Route exact path="/signup" render={(props) =><AuthForm buttonText="Signin"
                heading="Join Warbler.!"
                signUp
                errors={errors.message}
                onAuth={authUser}
                remove={removeError}
                {...props} 
                />}
            />
            <Route exact path="/users/:id/message/new" component={(props)=><NewComponent {...props}/>} />
        </Switch>
    </div>);
}


function mapStatetoProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.error
    };
}
export default withRouter(connect(mapStatetoProps, { authUser, removeError})(Main));