import React from 'react';
import styled from 'styled-components';
import { PhotoList } from './PhotoList';
// import { DUMMY_PHOTOS } from '../../../mock/mock';
import { useSelector } from 'react-redux';
// store -> Selectors directory - there for every slice create selector (good way when app becomes bigger)
// getPhotoId, getAuthor - reusable list of selector, export them
import { RootState } from '../../../../store/slices/types';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: whitesmoke;

  h3 {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Gallery: React.FC = () => {
  const gallery = useSelector((state: RootState) => state.galleryState.gallery);

  return (
    <GalleryContainer>
      <h3>All pictures:</h3>
      <PhotoList photos={gallery} />
    </GalleryContainer>
  );
};
