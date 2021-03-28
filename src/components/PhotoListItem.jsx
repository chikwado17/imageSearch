import React, { Component } from 'react'
import './PhotoList.css';


class PhotoListItem extends Component {
    render() { 
        const { photo } = this.props;
        return ( 
                <div className="ui segment">
                    <img src={photo.urls.regular} alt='Nworie Chikwado react project with context' />
                </div>
         );
    }
}
 
export default PhotoListItem;