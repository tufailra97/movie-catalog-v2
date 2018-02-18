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
      type : 'Top Movie',
      page: null,
      totalPages: null,
      totalRes: null
    }
  }

  componentDidMount(){
    this.fetchMovie();
    console.log(this.state.totalPages);
  }
  //fetching movie
  fetchMovie = () =>{
    const API = '72049b7019c79f226fad8eec6e1ee889';
    let movieAPI = '';

    //if the length of the movies is equal to zero fetch default search
    if( this.state.name === '' ){
      movieAPI = "https://api.themoviedb.org/3/discover/movie?api_key="+API+"&sort_by=popularity.desc&page="+ this.state.page;
    }else{
      //search the movie name
      movieAPI = "https://api.themoviedb.org/3/search/movie?page="+this.state.page+"&query=" + this.state.name + "&api_key="+API;
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
          movies: data.results,
          totalPages: data.total_pages,
          totalRes: data.total_results,
          page: 1
        });
      }

    }).catch(err => {
      console.log("ERROR: " + err);
    })
  }


  //handle name
  handleResult = (name) =>{
    this.setState({
      name: name,
      type: 'Results for: ' + name
    },()=>{
      this.fetchMovie();
    });
  }
  //handle page number
  handlePage = (page) =>{
    let value = page;
    this.setState({
      page : value
    }, () => {
      this.fetchMovie()
    });
  }
  //render the component
  render() {
    return (
      <div className="main">
        <Header name = {this.handleResult}/>
        <DisplayList 
          movies={this.state.movies} 
          res={this.state.type}
          details={this.state}
          pageNumber={this.handlePage}/>
        <Footer />
      </div>
    );
  }
}

export default Movies;
