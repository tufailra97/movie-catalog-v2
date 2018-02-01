import React, { Component } from 'react';
import SearchMovie from './SearchMovie';

export default class Header extends Component {
  constructor(){
    super();

    this.state = {
      movieName: ''
    }
  }
  //handle movie name
  handleMovieName = (name) =>{
    let movieName = name;
    this.props.name(name);
    //set movie name
    this.setState({
      movieName
    });
  }
  //render HEADER
  render(){
    return(
      //HEADER
      <header id="header">
        <nav className="level">
          <div className="level-left">
            <div id="logo" className="level-item">
              <figure className="image is-128x128">
                <img src="asset/img/logo.svg" alt="movie"/>
              </figure>
            </div>
            <div className="level-item">
              <a href="#">
                <span>Web</span>
                <span>Movie</span>
              </a>
            </div>
          </div>
          <div className="level-right">

            <div className="level-item">
              <SearchMovie searchName={this.handleMovieName}/>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
