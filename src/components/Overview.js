import React, { Component } from 'react';
import Modal from 'react-modal'

//Movie Details component
export default class Overview extends Component {
    constructor(){
      super();

      this.state = {
        modalIsOpen: false,
        movieVideoId : '',
        movieCredit : {},
        };
    }

    componentWillMount() {
      Modal.setAppElement('body');
    }

    //on open modal
    openModal = () => {
      this.setState({modalIsOpen: true});
      this.fetchMovieVideoId();
      this.fetchMovieCredit();
    }

    //on close the modal
    closeModal = () => {
      this.setState({modalIsOpen: false});
    }

    //get movie trailer id
    fetchMovieVideoId = () =>{
        const movieUrl = 'https://api.themoviedb.org/3/movie/'+ this.props.overview.id +'/videos?language=en-US&api_key=72049b7019c79f226fad8eec6e1ee889';
        //https://api.themoviedb.org/3/movie/346364/videos?language=en-US&api_key=72049b7019c79f226fad8eec6e1ee889
        const req = new Request(movieUrl, {
          method: 'GET',
          cache: 'default'
        });

        fetch(req).then(response =>{
          return response.json();
        }).then(data =>{
            this.setState({
              movieVideoId: data.results[0].key
            });    
        }).catch(err => {
          console.log("ERROR: " + err);
        });
    }

    //get movie credits
    fetchMovieCredit = () =>{
      let credit;
      const movieUrl = 'https://api.themoviedb.org/3/movie/'+ this.props.overview.id +'/credits?api_key=72049b7019c79f226fad8eec6e1ee889';
        //https://api.themoviedb.org/3/movie/%7Bmovie_id%7D/credits?api_key=%3C%3Capi_key%3E%3E
        const req = new Request(movieUrl, {
          method: 'GET',
          cache: 'default'
        });

        fetch(req).then(response =>{
          return response.json();
        }).then(data =>{
            this.setState({
              movieCredit: data
            });
        }).catch(err => {
          console.log("ERROR: " + err);
        });
    }



    //render the component
    render() {
    const POSTER_URL = "https://image.tmdb.org/t/p/w300/";
    const YTB_URL = "https://youtube.com/embed/";
    const movie = this.props.overview;
    const credit = this.state.movieCredit.cast;
    let c = [];
    let characters;
    if(credit !== undefined){
      let index;

      //check whether the lenght of the 
      if(credit.length > 10 ){
        index = 10;
      }else{
        index = credit.length;
      }

      //loop to get the only the first 10 characters
      for(let i=0; i <index; i++){
        c.push(
          credit[i].name
        );
      }

      characters = c.map((name, index) => {
        return(
          <span key={index} className="cast-name">{name},</span>
        );
      });
    }else{
      characters = <span className="loading">Still loading</span>
    }

    
    return (
      <div className="overview">
        <div>
          <button onClick={this.openModal}>More..</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="movie"
        >
        <div className="border">
          <div className="close">
            <button onClick={this.closeModal} className="fa fa-times"></button>
          </div>
          <div className="modal">
            <div className="frame">
              <iframe src={encodeURI(YTB_URL) + this.state.movieVideoId + "?controls=1"} frameBorder="0" allowFullScreen={"true"} title={this.state.movieVideoId}></iframe>
            </div>  
            <div className="details">
              <div className="poster">
                <img src={encodeURI(POSTER_URL) + movie.poster_path} alt={movie.title}/>
              </div>
              <div className="info">
                <h1>{movie.title}</h1>
                <h2>{movie.release_date}</h2>
                <p>TMBd Rating: <span>{movie.vote_average}/10</span></p>
                <p>Cast: {characters}</p> 
                <p className="movie-desc">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}

//style for the modal component
const customStyles = {
  content : {
    width : '100%',
    height: '100%',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    backgroundColor: 'rgba(24, 29, 34, 0.8)',
    border: 'none',
    overflowY: 'auto'
  }
};
