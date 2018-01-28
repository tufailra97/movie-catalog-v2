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
        this.props.name(this.state.movieName);

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
            <form className="uk-search uk-search-navbar" onSubmit={this.submitSearch}>
                <div uk-form-custom="target: true">
                  <input 
                    className="uk-input uk-form-width-medium" 
                    onChange={this.handleSearch} 
                    type="text" 
                    placeholder="Movie Name..." 
                    value={this.state.movieName}/>
                </div>
                <button className="uk-button uk-button-default">Search</button>
            </form>
        );
    }
}