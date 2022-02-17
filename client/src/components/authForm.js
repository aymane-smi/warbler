import React, {Component} from 'react';

class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            profileImageUrl: ""
        }
    }
    handleChange = (evt)=>{
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit = (evt)=>{
        evt.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(()=>{
            this.props.history.push("/");
        }).catch(()=>{
            return;
        });
    }
    render(){
        const {email, username, password, profileImageUrl} = this.state;
        const {buttonText, heading, signUp, errors, history, remove} = this.props;
        history.listen(()=>{
            remove();
        });
        return (<div className="row justify-content-md-center text-center">
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <h2>{heading}</h2>
                    {errors && (<div className="alert alert-danger">{errors}</div>)}
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                           id="email"
                           className="form-control"
                           onChange={this.handleChange}
                           name="email"
                           value={email}
                    />
                    {signUp && (
                        <>
                            <label htmlFor="username">Username:</label>
                            <input type="text"
                                id="username"
                                className="form-control"
                                onChange={this.handleChange}
                                name="username"
                                value={username}
                            />
                            <label htmlFor="profileImageUrl">Profile Image Url:</label>
                            <input type="text"
                                id="profileImageUrl"
                                className="form-control"
                                onChange={this.handleChange}
                                name="profileImageUrl"
                                value={profileImageUrl}
                            />
                        </>
                    )}
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                           id="password"
                           className="form-control"
                           onChange={this.handleChange}
                           name="password"
                           value={password}
                    />
                    <button type="submit" className="btn btn-primary btn-lg mt-5">{heading}</button>
                </form>
            </div>
        </div>);
    }
}

export default AuthForm;