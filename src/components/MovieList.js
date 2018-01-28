import React from 'react';

const MovieList = ({movies}) =>{
    let url = "http://image.tmdb.org/t/p/w500/";
    if(!movies){
        return <h1>Loading...</h1>
    }
    return (
        <div className=".uk-container-small">
            <h1 className="uk-heading-divider uk-text-center">Result</h1>
            <div className="uk-margin-small uk-grid-small  uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid="true">
                {
                    movies.map((movie, index) => {
                        return (
                            <div key={index}>
                                <div className="uk-card uk-card-default uk-text-center uk-card-body">
                                    <p>{movie.title}</p>
                                    <img src={encodeURI(url)+movie.poster_path} alt={movie.title}/>
                                    <p className="desc"></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    );
        
}

export default MovieList;