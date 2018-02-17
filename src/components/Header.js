import React, { Component } from 'react';
import SearchMovie from './SearchMovie';

//Header component
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
        <nav className="display-inline">
          <div id="logo">
              <a href="">
                <h1 className="title">MovieLots</h1>
              </a>
          </div>
          <div>
            <ul className="display-inline">
              <li><a href="#">Movie</a></li>
              <li><a href="#">Series</a></li>
            </ul>
          </div>
          <div className="search-bar">
                <SearchMovie searchName={this.handleMovieName}/>
          </div>
        </nav>
        
        <span className="toggle"></span>
      </header>
    );
  }
}
