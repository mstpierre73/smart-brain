import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition';
import './App.css';

class App extends Component {
  render() {
  return (
      <div className="App">
        <h1>Image Recognition App</h1>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
