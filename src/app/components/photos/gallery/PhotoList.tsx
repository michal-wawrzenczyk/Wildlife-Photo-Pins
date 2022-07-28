import React from 'react';
import styled from 'styled-components';
import { PhotoItem } from './PhotoItem';
import { PhotosData } from '../../../types/photos-data';

const PhotoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  overflow-y: scroll;
  flex: 1 1 0;
`;

export interface PhotoListProps {
  photos: PhotosData[];
}

export const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  return (
    <PhotoListContainer>
      {photos.map(
        ({ photoId, photoUrl, author, species, description, location }) => (
          <PhotoItem
            key={photoId}
            photoUrl={photoUrl}
            photoId={photoId}
            author={author}
            species={species}
            description={description}
            location={location}
          />
        )
      )}
    </PhotoListContainer>
  );
};
