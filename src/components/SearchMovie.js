import React from 'react';

export default class SearchMovie extends React.Component{
    constructor(){
        super();
        
        //define state
        this.state = {
            movieName : ''
        }
    }

    //submit the movie search
    submitSearch = (e) =>{
        e.preventDefault();
        //pass to the parent the movie name
        this.props.searchName(this.state.movieName);

        //set movieName to an empty string 
        this.setState({
            movieName: ''
        });
    }

    //handle the user search and updating the state 
    handleSearch = (e) =>{
        let name = e.target.value;
        this.setState({
            movieName: name
        });
    }

    //render the component
    render(){
        return(
            <form className="level field has-addons" onSubmit={this.submitSearch}>
                <div className="control">
                  <input 
                    className="input" 
                    onChange={this.handleSearch} 
                    type="text" 
                    placeholder="Movie Name..." 
                    value={this.state.movieName}/>
                </div>
                
                <div className="control">
                    <button className="button is-info">Search</button>
                </div>
            </form>
        );
    }
}