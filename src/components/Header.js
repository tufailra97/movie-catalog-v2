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
        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
          <div className="uk-navbar-left">
            <ul id="logo" className="uk-navbar-nav">
              <li>
                <a>
                  <img src="asset/img/logo.svg" alt="Movie"/>
                  <span className="uk-text-large">Movie</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Tv Series</a>
              </li>
              <li>
                <a href="#">Upcoming</a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <SearchMovie name={this.handleMovieName}/>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
