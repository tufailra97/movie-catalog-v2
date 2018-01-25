import React, { Component } from 'react';

export default class Header extends Component {

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
                  <img src="asset/img/logo.svg" />
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
              <form className="uk-search uk-search-navbar" onSubmit={this.submitSearch}>
                <div uk-form-custom="target: true">
                  <input class="uk-input uk-form-width-medium" type="text" placeholder="Movie Name..." />
                </div>
                <button class="uk-button uk-button-default">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
