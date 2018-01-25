import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//themoviedb API 72049b7019c79f226fad8eec6e1ee889
//example api search https://api.themoviedb.org/3/movie/550?api_key=72049b7019c79f226fad8eec6e1ee889



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: '',
      movieName: ''
    }
  }

  render() {
    return (
      <div className="root">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
