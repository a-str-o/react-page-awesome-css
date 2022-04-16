import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import { FaMagic } from 'react-icons/fa';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonVisible : false,
      toggleText:false,
      colorHead: "Head-container-bluenavy",
      colorBottom: "bottom-container-bluenavy",
      dark: "white",

    }
  }
  onShowHide = (e) => {
    this.setState({ buttonVisible: !this.state.buttonVisible });
  }
  bluenavy = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-bluenavy", colorBottom: "bottom-container-bluenavy",})
  }
  blueyale = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-blueyale", colorBottom: "bottom-container-blueyale",})
  }

  blueolympic = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-blueolympic", colorBottom: "bottom-container-blueolympic",})
  }

  greenmoss = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greenmoss", colorBottom: "bottom-container-greenmoss",})
  }

  greenlime = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greenlime", colorBottom: "bottom-container-greenlime",})
  }

  purplemonster = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-purplemonster", colorBottom: "bottom-container-purplemonster",})
  }

  orangecarrot = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-orangecarrot", colorBottom: "bottom-container-orangecarrot",})
  }

  redruby = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-redruby", colorBottom: "bottom-container-redruby",})
  }

  yellowgranola = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-yellowgranola", colorBottom: "bottom-container-yellowgranola",})
  }

  greysteel = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greysteel", colorBottom: "bottom-container-greysteel",})
  }


  dark = (e) => {
    e.preventDefault();
    if (this.state.dark  === "white")
      this.setState({dark : "dark"})
    else
      this.setState({dark : "white"})
  }
  
  render() {
  return (
      <div className={`App  ${this.state.dark}`}>
        <div  className={`Head-container  ${this.state.colorHead}`}>
             <Navbar />
             {this.state.colorHead}
          </div>
          <div className="bottom-container">
            <div className="navbar-container">
                  <h1>
                    hello
                  </h1>
                </div>
          </div>
         
          
          <div className="theme-button" >
           {this.state.buttonVisible ? 
            <div className={`magic-container  ${this.state.dark}`}>
            <div className="center">
                <p className="text-muted mb-2">Light Theme</p>
                <div className="flex-div">
                  <div className="btnC color-bluenavy" onClick={this.bluenavy} ></div>
                  <div className="btnC color-blueyale" onClick={this.blueyale} ></div>
                  <div className="btnC color-blueolympic" onClick={this.blueolympic} ></div>
                  <div className="btnC color-greenmoss" onClick={this.greenmoss} ></div>
                  <div className="btnC color-greenlime" onClick={this.greenlime} ></div>
                </div>
                <div className="flex-div">
                  <div className="btnC color-purplemonster" onClick={this.purplemonster} ></div>
                  <div className="btnC color-orangecarrot" onClick={this.orangecarrot} ></div>
                  <div className="btnC color-redruby" onClick={this.redruby} ></div>
                  <div className="btnC color-yellowgranola" onClick={this.yellowgranola} ></div>
                  <div className="btnC color-greysteel" onClick={this.greysteel} ></div>
                </div>
                <p className="text-muted mb-2">Dark Theme</p>
                  <div className={`btnC  ${this.state.dark}`} onClick={this.dark} ></div>
            </div>
          </div>
            : ""}
            <div onClick={this.onShowHide} className='btn-slide'><FaMagic /></div>
          </div>
      </div>
  );
}
}

export default App;
