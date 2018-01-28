import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

const MOVIE_API = "http://api.themoviedb.org/3/discover/movie?api_key=72049b7019c79f226fad8eec6e1ee889&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=false&page=2&primary_release_year=2018";

//class
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [],
      movieName: ''
    }
  }
  

  componentWillMount(){
    this.fetchMovie();
  }


//fetching movie
  fetchMovie = () =>{
    const req = new Request(MOVIE_API, {
      method: 'GET',
      cache: 'default'
    });

    fetch(req).then(response =>{
      return response.json();
    }).then(data =>{
      this.setState({
        movies: data.results
      });
    }).catch(err => {
      console.log("ERROR: " + err);
    })
  }

  render() {
    return (
      <div className="root">
        <Header />
        <MovieList moviesRes={this.state.movies}/>
        <Footer />
      </div>
    );
  }
}

export default App;
