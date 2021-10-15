import React from 'react';
import './SignIn.css';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInEmail : "",
            signInPassword : ""
        } 
    };

onEmailChange = (event) =>{
    this.setState({ signInEmail: event.target.value})
    }
    
onPasswordChange = (event) =>{
    this.setState({ signInPassword: event.target.value})
    }
    
onSubmitSignIn = () => {
    fetch('http://localhost:4000/signin', {
        method: 'post',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        })
    }).then(response => response.json())
      .then(data => {
          if (data === "success"){
            this.props.onRouteChange('home')
          }
      })
    }
    
render(){
    const { onRouteChange } = this.props
return(
    <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l center mw6 shadow-5">
        <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor='email'>Email</label>
                <input 
                    className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                    type="email" 
                    name="email-address"  
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
            </div>
            <div className="mv3">
                <label  className="db fw6 lh-copy f5" htmlFor='password'>Password</label>
                <input 
                    className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                    type="password" 
                    name="password"   
                    id="password"
                    onChange={this.onPasswordChange}
                    />
            </div>
            </fieldset>
            <div className="">
                <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit" 
                    value="Sign in"
                    onClick={this.onSubmitSignIn} 
                    />
            </div>
            <div className="lh-copy">
            <p onClick={() => onRouteChange('register')} className="b f5 link black db pointer pr5 pv2 grow"> Register </p>  
            </div>
        </div>
        </main>
    </article>
        )
    }
}
 

 


export default SignIn;