import React, { Component } from 'react'
import './PhotoList.css';


class PhotoListItem extends Component {
    render() { 
        const { photo } = this.props;
        return ( 
            <div className="ui three column grid">
                <div className="column">
                    <div className="ui segment">
                        <div className="ui medium images">
                            <img src={photo.urls.regular} alt='Nworie Chikwado react project with context' />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PhotoListItem;