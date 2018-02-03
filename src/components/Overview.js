import React, { Component } from 'react';
import Modal from 'react-modal'

//Movie Details component
export default class Overview extends Component {
    constructor(){
      super();

      this.state = {
        modalIsOpen: false
      };
    }

    componentWillMount() {
      Modal.setAppElement('body');
    }

    //on open modal
    openModal = () => {
    this.setState({modalIsOpen: true});
    }

    //on close the modal
    closeModal = () => {
      this.setState({modalIsOpen: false});
    }

    //render the component
    render() {
    const url = "https://image.tmdb.org/t/p/w780/";
    const movie = this.props.overview;
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
              <p><span className="subtitle is-5">Vote:</span> <span className="title is-4">{movie.vote_average}/10</span> </p>
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
    width : '40%',
    height: '90%',
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
