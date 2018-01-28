import React, { Component } from 'react';

export default class MovieList extends Component{

    render(){
        const { movieRes = [] } = this.props; // we are assigning a default prop here of an empty array.
        return(
            <ul>
                {
                    //return movie from array
                    movieRes.map((movie, index)=>{
                        return (
                            <li key={index}>
                                {movie.id}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}