import React, { Component } from 'react';
import { PhotoContext } from '../Context/PhotoContext';

class SearchBar extends Component {

    static contextType = PhotoContext;

    state = { 
        search: ''
    }

    handleOnchangeButtonSearch  = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.context.handleGetPhoto(this.state.search);
    }

    render() { 
        const { search } = this.state;
        return ( 
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input value={search} onChange={this.handleOnchangeButtonSearch} type="text"/><br/><br/>
                        <button className="ui primary button" type="submit">Search</button>
                    </div>
                </form>
            </div>
         );
    }
}

export default SearchBar;