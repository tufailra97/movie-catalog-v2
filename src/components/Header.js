import React, { Component } from 'react';
import SearchMovie from './SearchMovie';

//Header component
export default class Header extends Component {
  constructor(){
    super();

    this.state = {
      movieName: '',
      menuStatus: 'toggle-item disable'
    }
  }
  //handle movie name
  handleMovieName = (name) =>{
    let movieName = name;
    this.props.name(name);
    //set movie name
    this.setState({
      movieName,
    });
  }

  //handle menu
  handleMenu = () =>{
    if(this.state.menuStatus == 'toggle-item disable'){
      this.setState({
        menuStatus: 'toggle-item active'
      });
    }else{
      this.setState({
        menuStatus: 'toggle-item disable'
      });
    }
  }
  //render HEADER
  render(){
    return(
      //HEADER
      <header id="header">
        <nav className="display-inline">
          <div className="res-menu">
            <div id="logo">
                <a href="">
                  <h1 className="title">MovieLots</h1>
                </a>
            </div>
            <div className="toggle">
              <span className="fa fa-bars" onClick={this.handleMenu}></span>
            </div>
          </div>
          <div className={this.state.menuStatus}>
              <ul className="display-inline">
                <li><a href="#">Movie</a></li>
                <li><a href="#">Series</a></li>
                <li><SearchMovie searchName={this.handleMovieName}/></li>
              </ul>
          </div>
        </nav>
      </header>
    );
  }
}
