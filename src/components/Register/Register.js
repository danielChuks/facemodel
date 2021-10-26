import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: '',
            name:''
        }
    }

onEmailChange = (event) => {
    this.setState({ email: event.target.value})
    }

onPasswordChange = (event) => {
    this.setState({ password: event.target.value})
    }

onNameChange = (event) =>{
    this.setState({ name: event.target.value})
    }

onSubmitRegister = () => {
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.Password,
                name: this.state.name 
            })
        }).then(response => response.json())
          .then(user => {
              if (user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
              }
          }).catch(err => console.log(err)) 
        }
        

    render(){
        return(
            <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l center mw6 shadow-5">
                <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor='first name'>First Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="first-name"  
                        id="first-name"
                        onChange={this.onNameChange}
                        />
                    </div>
                  
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor='email'>Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor='password'>Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div className="">
                        <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                    </div>
                </div>
                </main>
            </article>
        )
    }
  
}
 

 


export default Register;