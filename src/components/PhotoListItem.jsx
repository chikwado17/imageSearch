import React, { Component } from 'react'
import './PhotoList.css';


class PhotoListItem extends Component {
    render() { 
        const { photo } = this.props;
        return ( 
            <div className="ui container">
                <div className="ui medium images">
                    <img src={photo.urls.raw} alt='Nworie Chikwado react project with context' />
                </div>
            </div>
         );
    }
}
 
export default PhotoListItem;