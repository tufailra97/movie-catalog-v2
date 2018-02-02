import React from 'react';
import MovieDetails from './MovieDetails';
//Movie List component
class MovieList extends React.Component {
    render(){
        //extract the props
        const movies = this.props.movies;
        const url = "http://image.tmdb.org/t/p/w300/";
        return(
            <section className="container is-fluid movie-list">
              <div className="res">
                <h1 className="title is-1 has-text-centered">Result</h1>
              </div>
              <div className="columns is-multiline is-mobile is-centered">
                {
                  movies.map((movie, index) => {
                    return (
                      <div key={index}>
                        <div className="column box has-text-centered">
                          <div className="hero is-link">
                            <p>{movie.title}</p>
                          </div>
                          <figure>
                            <img src={encodeURI(url)+movie.poster_path} alt={movie.title}/>
                          </figure>
                          <MovieDetails movieDetail={movie}/>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </section>
        );
    }
}

export default MovieList;
