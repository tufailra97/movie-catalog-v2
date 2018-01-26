import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

//themoviedb API 72049b7019c79f226fad8eec6e1ee889
//example api search https://api.themoviedb.org/3/movie/550?api_key=72049b7019c79f226fad8eec6e1ee889
const MOVIE_API = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=home&api_key=72049b7019c79f226fad8eec6e1ee889";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: '',
      movieName: ''
    }

    this.fetchMovie();
  }
  /*
  var myHeaders = new Headers();

  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };

  var myRequest = new Request('flowers.jpg', myInit);

  fetch(myRequest).then(function(response) {
    return response.blob();
  }).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
  */

  fetchMovie = () =>{
    const req = new Request(MOVIE_API, {
      method: 'GET',
      chache: 'default',
      img: ''
    });

    fetch(req).then(response =>{
      return response.json();
    }).then(data =>{
      this.setState({
        movies: data.results
      })
    }).catch(err => {
      console.log(err);
    })

    console.log(req);
  }

  render() {
    return (
      <div className="root">
        <Header />
        <Footer />
        {this.movies.map((movie, index)=>{
          return(
            <div key={index}>
              {movie.vote_average}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
