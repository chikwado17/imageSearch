import React, { Component, createContext } from 'react';
import Unsplash from '../components/apis/Unsplash';


export const PhotoContext = createContext();

class PhotoContextProvider extends Component {
    state = {
        SearchInput: []
    }

    componentDidMount() {
        this.handleGetPhoto('Laptops');
    }
    
    handleGetPhoto = async (photos) => {
        const response = await Unsplash.get('/search/photos', {
            params: {
                query: photos
            }
        });
        this.setState({
            SearchInput: response.data.results
        })
    }
    
    render() { 
        return ( 
            <PhotoContext.Provider value={{...this.state, handleGetPhoto: this.handleGetPhoto}}>
                {this.props.children}
            </PhotoContext.Provider>
         );
    }
}

export default PhotoContextProvider;