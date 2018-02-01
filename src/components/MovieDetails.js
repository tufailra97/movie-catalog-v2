import React, { Component } from 'react';
import Modal from 'react-modal'



export default class MovieDetails extends Component {
    constructor(){
      super();

      this.state = {
        modalIsOpen: false
      };
    }

    componentWillMount() {
      Modal.setAppElement('body');
    }

    displayMovieDetails = () =>{
      console.log(this.props.movieDetail);
    }

    openModal = () => {
    this.setState({modalIsOpen: true});
    }


    closeModal = () => {
      this.setState({modalIsOpen: false});
    }

    render() {
    const url = "http://image.tmdb.org/t/p/w780/";
    const movie = this.props.movieDetail;
    return (
      <div>
        <div className="hero">
          <button className="button is-link is-outlined" onClick={this.openModal}>More..</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="movie"
        >
          <div className="notification">
            <button onClick={this.closeModal} className="delete"></button>
            <div>
              <figure className="image">
                <img src={encodeURI(url) + movie.backdrop_path} alt={movie.title}/>
              </figure>
            </div>
            <div className="box">
              <p><span className="subtitle is-5">Title:</span> <span className="title is-4">{movie.title}</span> </p>
              <p><span className="subtitle is-5">Date:</span> <span className="title is-4">{movie.release_date}</span></p>
              <hr/>
              <p><span className="subtitle is-5">Overview:</span></p>
              <p>{movie.overview}</p>
              <hr/>
              <p><span className="subtitle is-5">Vote:</span> <span className="title is-4">{movie.vote_average}</span> </p>
            </div>
        </div>
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content : {
    maxWidth : '720px',
    maxHeigth: '600px',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    background: 'none',
    border: 'none'
  }
};
