import React from 'react';
import MovieDetails from './MovieDetails';
//The following component will render the movie result only
class MovieList extends React.Component {
    render(){
        //extract the props 
        const movies = this.props.movies;
        const url = "http://image.tmdb.org/t/p/w500/";
        return(
            <div className=".uk-container uk-margin">
                <h1 className="uk-heading-divider uk-text-center">Result</h1>
                <div className="uk-margin-small uk-grid-small  uk-child-width-1-5@s uk-flex-center uk-text-center" uk-grid="true">
                    {
                        movies.map((movie, index) => {
                            return (
                                <div key={index}>
                                    <div className="uk-card uk-card-default uk-text-center uk-card-body">
                                        <p>{movie.title}</p>
                                        <img src={encodeURI(url)+movie.poster_path} alt={movie.title}/>
                                        <MovieDetails />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
        );
    }
}

export default MovieList;