import React, { Component } from 'react'
import { PhotoContext } from '../Context/PhotoContext';
import PhotoListItem from './PhotoListItem';

import './PhotoList.css';


class PhotoList extends Component {
 
    render() { 
        return ( 
            <PhotoContext.Consumer>{(photos) => {
                const { SearchInput } = photos;
                return (
                    <div className="image-list">
                        {SearchInput && SearchInput.map(photo => (
                            <PhotoListItem key={photo.id} photo={photo} />
                        ))}
                    </div>
                )
            }}
            </PhotoContext.Consumer>
         );
    }
}
export default PhotoList;