import React from 'react';
import Overview from './Overview';
import Pagination from "react-js-pagination";

//Display List component
class DisplayList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1
      };
    }
    handlePageChange = (pageNumber)=> {
      this.setState({
          activePage: pageNumber
        }, ()=>{
          this.setState({
            activePage: pageNumber
          })
        });
      this.props.pageNumber(this.state.activePage);
    }

    render(){
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
                          <div className="m-rate">
                            <span className="fa fa-star"></span><span>{movie.vote_average}</span>
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
              
              <div>
                <Pagination
                  firstPageText='first'
                  lastPageText='last'
                  activePage={this.state.activePage}
                  itemsCountPerPage={20}
                  totalItemsCount={this.props.details.totalRes}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                />
              </div>

            </section>
        );
    }
}

export default DisplayList;
