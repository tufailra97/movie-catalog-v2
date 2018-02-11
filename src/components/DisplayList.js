import React from 'react';
import Overview from './Overview';
//Display List component
class DisplayList extends React.Component {
    render(){
        //extract the props
        const movies = this.props.movies;
        const url = "http://image.tmdb.org/t/p/w300/";
        return(
            <section className="result-list">
              <div className="rest">
                <h1 className="title">{this.props.res}</h1>
                <hr/>
              </div>
              <div className="display-list">
                {
                  movies.map((movie, index) => {
                    return (
                      <div className="item" key={index}>
                          <div className="image">
                            <img src={encodeURI(url)+movie.poster_path} alt={movie.title}/>
                          </div>
                          <div className="desc">
                            <p>{movie.title}</p>
                            <Overview overview={movie}/>
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

export default DisplayList;
