import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';
import logo from './logo.svg';
import './App.css';
import './index.css';


const Cat = {
  name: "aaa",
  color: "white",
  specialAbility: "sleeping",
  urlImage: "url",
  isAdopted: false
};

const Cats = [{ ...Cat }, { ...Cat }, { ...Cat }];
Cats[0].name = "Missy";
Cats[0].corlor = "Tabby";
Cats[0].specialAbility = "Sleeping";
Cats[0].urlImage = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2014-12-08-Cat27.jpg&f=1";
Cats[1].name = "Snowball";
Cats[1].color = "White";
Cats[1].specialAbility = "Jumping";
Cats[1].urlImage = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-RqrX3I_hIPo%2FVxY5gyLRhNI%2FAAAAAAAAKys%2FP3q5PELy8r0XHV4HQ3fJSXMW54GMn6wywCLcB%2Fs1600%2FDSC04778.jpg&f=1";
Cats[2].name = "Mr. Snuggles";
Cats[2].color = "black";
Cats[2].specialAbility = "Time travel";
Cats[2].urlImage = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IgEER9Wg3hs_kAlDxb98GgHaE8%26pid%3DApi&f=1";


class Readdata extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div style={{ backgroundColor: "black" }}></div>
        <img src={ this.props.urlImage } alt={ this.props.name }/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>[Adopt me]</h1>
        </div>
        <div className="App-intro">
          <p> We need our adorable && compatible owners!</p>
        </div>
        <div className="App-body">
          {Cats.map((element) => {
            return <Readdata {...element} />
          }
          )}
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
