import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}

class App extends Component {
  render() {
  return (
      <div className="App">
        <Particles className='particles'
          params={ particlesOptions }
        />
        <h1>Image Recognition App</h1>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
