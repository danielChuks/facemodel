import React, { Component } from 'react';
import './App.css';
import Clarifai from "clarifai";
import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

//configurations for clarifai Api
const app = new Clarifai.App({
  apiKey: "6a0442be546949a6a4ebf64ad5a27746"
});

const initialState = {
  input: '',
  imageUrl:'',
  box: {},
  route: 'signin',
  isSignedIn : false,
  user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
  } 
}  


class App extends Component{
  constructor(){
    super(); 
    this.state = initialState;
  }


  loadUser = (data) => {
      this.setState({ user : {
        id: data.id,
        name: data.name,
        email: data.emall,
        entries: data.entries,
        joined: data.joined
      }})
  }
 

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; 
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height, 
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    } 
  }


displayFaceBox = (box) => {
this.setState({box: box })
}

onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

onPictureSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, 
    this.state.input)
    .then(response => {
      if(response){
        fetch('http://localhost:4000/image', {
        method: 'put',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            id : this.state.user.id
        })
      }).then(response => response.json())
        .then(count => {
            this.setState(Object.assign(this.state.user, { entries : count}))
        }).catch(err => console.log(err))
    }
     this.displayFaceBox(this.calculateFaceLocation(response))
  })
    .catch(err => console.log(err))
}

onRouteChange = (route) => {
    if(route === 'signout'){
        this.setState(initialState)
    }else if (route === 'home'){
        this.setState({isSignedIn : true})
    }
    this.setState({route: route })
}

  render(){
      const { isSignedIn, imageUrl, route, box} = this.state;
    return(
      <div className="App">   
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        { route === 'home'
        ? <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries}/> 
            <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
            <FaceRecognition box={box} imageUrl={imageUrl}/> 
        </div>
        
        : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    ); 
  }
  }
  

export default App;
