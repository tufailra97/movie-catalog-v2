import React, { Component } from 'react';
import Header from '../components/Header';
import DisplayList from '../components/DisplayList';
import Footer from '../components/Footer';


//class
class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [],
      name: '',
      type : 'Top Movie'
    }
  }


  componentDidMount(){
    this.fetchMovie();
  }
  //fetching movie
  fetchMovie = (name) =>{
    const API = '&api_key=72049b7019c79f226fad8eec6e1ee889';
    let movieAPI = '';

    //if the length of the movies is equal to zero fetch default search
    if( this.state.movies.length === 0 ){
      movieAPI = "https://api.themoviedb.org/3/discover/movie?api_key=72049b7019c79f226fad8eec6e1ee889&sort_by=popularity.desc&page=1";
    }else{
      //search the movie name
      movieAPI = "https://api.themoviedb.org/3/search/movie?page=1&query=" + name + API;
    }


    const req = new Request(movieAPI, {
      method: 'GET',
      cache: 'default'
    });

    fetch(req).then(response =>{
      return response.json();
    }).then(data =>{
      //if data fetched result is greater than 0
      if(data.results.length > 0){
        this.setState({
          movies: data.results
        });
      }

    }).catch(err => {
      console.log("ERROR: " + err);
    })
  }


  //handle name
  handleResult = (name) =>{
    this.setState({
      name: name
    });
    this.fetchMovie(name);
  }

  //render the component
  render() {
    return (
      <div className="main">
        <Header name = {this.handleResult}/>
        <DisplayList movies={this.state.movies} res={this.state.type}/>
        <Footer />
      </div>
    );
  }
}

export default Movies;
