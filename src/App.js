import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import { FaMagic } from 'react-icons/fa';
import Hero from './img/hero1.png';
import Image1 from './img/plesant-design.png';
import Image2 from './img/smart-menu.png';
import Image3 from './img/superfine-charts.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonVisible : false,
      toggleText:false,
      colorHead: "Head-container-bluenavy",
      colorBottom: "bottom-container-bluenavy",
      dark: "white",
      colorBackground:"color-bluenavy",
      color:"bluenavy",
    }
  }
  onShowHide = (e) => {
    this.setState({ buttonVisible: !this.state.buttonVisible });
  }
  bluenavy = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-bluenavy", colorBottom: "bottom-container-bluenavy", colorBackground:"color-bluenavy",color:"bluenavy",})
  }
  blueyale = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-blueyale", colorBottom: "bottom-container-blueyale",colorBackground:"color-blueyale",color:"blueyale"})
  }

  blueolympic = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-blueolympic", colorBottom: "bottom-container-blueolympic",colorBackground:"color-blueolympic",color:"blueolympic"})
  }

  greenmoss = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greenmoss", colorBottom: "bottom-container-greenmoss",colorBackground:"color-greenmoss",color:"greenmoss",})
  }

  greenlime = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greenlime", colorBottom: "bottom-container-greenlime",colorBackground:"color-greenlime",color:"greenlime",})
  }

  purplemonster = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-purplemonster", colorBottom: "bottom-container-purplemonster",colorBackground:"color-purplemonster",color:"purplemonster",})
  }

  orangecarrot = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-orangecarrot", colorBottom: "bottom-container-orangecarrot",colorBackground:"color-orangecarrot",color:"orangecarrot",})
  }

  redruby = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-redruby", colorBottom: "bottom-container-redruby",colorBackground:"color-redruby",color:"redruby",})
  }

  yellowgranola = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-yellowgranola", colorBottom: "bottom-container-yellowgranola",colorBackground:"color-yellowgranola",color:"yellowgranola",})
  }

  greysteel = (e) => {
    e.preventDefault();
    this.setState({colorHead : "Head-container-greysteel", colorBottom: "bottom-container-greysteel",colorBackground:"color-greysteel",color:"greysteel"})
  }


  dark = (e) => {
    e.preventDefault();
    if (this.state.dark  === "white")
      this.setState({dark : "dark"})
    else
      this.setState({dark : "white"})
  }
  
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }];
  return (
      <div className={`App  ${this.state.dark}`}>

        {/* Header */}
        <div  className={`Head-container  ${this.state.colorHead}`}>
             <Navbar />
             <div className="hero-container">
               <div className="hero-text">
                  <h1>La transformation digitale au service de l’entreprise</h1>
                    <h2>Votre vision, nous la réalisons</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
               </div>
               <div className="hero-img">
                <img src={Hero} alt="hero" width="800" height="500"/>
               </div>
             </div>
          </div>
        {/* page content */}
        <center>
          <div className="text-center text-muted">
            <h1 className={this.state.color}>
                What is Lorem Ipsum?
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </center>
        <div className="box-container">
        <div className="info-box-item">
                  <svg   width="180" height="180" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(250,300)">
                          <path className={this.state.colorBackground}  d="M125.6,-88.7C153,-25,158.8,35,134.2,52.8C109.7,70.7,54.8,46.3,9.7,40.8C-35.5,35.2,-71,48.3,-103.2,26.1C-135.4,3.8,-164.3,-53.8,-146.5,-111.9C-128.7,-170,-64.4,-228.5,-7.6,-224.1C49.1,-219.7,98.1,-152.3,125.6,-88.7Z"></path>
                      </g>
                      <p className="text">kjsdhkjds</p>
                      
                  </svg>
                  <div class="info-body">
                    <h3 className="text-muted">What is Lorem Ipsum?</h3>
                    <p class="info__text text-muted">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                </div>
                <div className="info-box-item">
                  <svg   width="180" height="180" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(250,300)">
                          <path className={this.state.colorBackground}  d="M125.6,-88.7C153,-25,158.8,35,134.2,52.8C109.7,70.7,54.8,46.3,9.7,40.8C-35.5,35.2,-71,48.3,-103.2,26.1C-135.4,3.8,-164.3,-53.8,-146.5,-111.9C-128.7,-170,-64.4,-228.5,-7.6,-224.1C49.1,-219.7,98.1,-152.3,125.6,-88.7Z"></path>
                      </g>
                      <p className="text">kjsdhkjds</p>
                      
                  </svg>
                  <div class="info-body">
                    <h3 className="text-muted">What is Lorem Ipsum?</h3>
                    <p class="info__text text-muted">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                </div>
                <div className="info-box-item">
                  <svg   width="180" height="180" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(250,300)">
                          <path className={this.state.colorBackground}  d="M125.6,-88.7C153,-25,158.8,35,134.2,52.8C109.7,70.7,54.8,46.3,9.7,40.8C-35.5,35.2,-71,48.3,-103.2,26.1C-135.4,3.8,-164.3,-53.8,-146.5,-111.9C-128.7,-170,-64.4,-228.5,-7.6,-224.1C49.1,-219.7,98.1,-152.3,125.6,-88.7Z"></path>
                      </g>
                      <p className="text">kjsdhkjds</p>
                      
                  </svg>
                  <div class="info-body">
                    <h3 className="text-muted">What is Lorem Ipsum?</h3>
                    <p class="info__text text-muted">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                </div>
                <div className="info-box-item">
                  <svg   width="180" height="180" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(250,300)">
                          <path className={this.state.colorBackground}  d="M125.6,-88.7C153,-25,158.8,35,134.2,52.8C109.7,70.7,54.8,46.3,9.7,40.8C-35.5,35.2,-71,48.3,-103.2,26.1C-135.4,3.8,-164.3,-53.8,-146.5,-111.9C-128.7,-170,-64.4,-228.5,-7.6,-224.1C49.1,-219.7,98.1,-152.3,125.6,-88.7Z"></path>
                      </g>
                      <p className="text">kjsdhkjds</p>
                      
                  </svg>
                  <div class="info-body">
                    <h3 className="text-muted">What is Lorem Ipsum?</h3>
                    <p class="info__text text-muted">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                </div>
                <div className="info-box-item">
                  <svg   width="180" height="180" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(250,300)">
                          <path className={this.state.colorBackground}  d="M125.6,-88.7C153,-25,158.8,35,134.2,52.8C109.7,70.7,54.8,46.3,9.7,40.8C-35.5,35.2,-71,48.3,-103.2,26.1C-135.4,3.8,-164.3,-53.8,-146.5,-111.9C-128.7,-170,-64.4,-228.5,-7.6,-224.1C49.1,-219.7,98.1,-152.3,125.6,-88.7Z"></path>
                      </g>
                      <p className="text">kjsdhkjds</p>
                      
                  </svg>
                  <div class="info-body">
                    <h3 className="text-muted">What is Lorem Ipsum?</h3>
                    <p class="info__text text-muted">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                </div>
                </div>
        </div>

         <div className="div-style">
               <div className="container-text">
                  <h1>La transformation digitale au service de l’entreprise</h1>
                    <h2>Votre vision, nous la réalisons</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
               </div>
               <div className="container-img">
                <img src={Image1} alt="hero" width="800" height="500"/>
               </div>
             </div>
        {/* Footer */}
          <div className={`bottom-container  ${this.state.colorBottom}`}>
            <div className="navbar-container">
                  <h1>
                    hello
                  </h1>
            </div>
          </div>
    
          <div className={`theme-button  ${this.state.dark}`}>
           {this.state.buttonVisible ? 
            <div className="magic-container">
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
                  <div className={`btnC margin-btn ${this.state.dark}`} onClick={this.dark} ></div>
            </div>
          </div>
            : ""}
            <div onClick={this.onShowHide} className='btn-slide'><FaMagic  color= "#797777" /></div>
          </div>
      </div>
  );
}
}

export default App;
