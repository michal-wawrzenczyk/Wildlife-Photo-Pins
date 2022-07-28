import React from 'react';
import styled from 'styled-components';
import { Gallery } from './gallery/Gallery';
import { Map } from './map/Map';

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Photos: React.FC = () => {
  return (
    <PhotosContainer>
      <Gallery />
      <Map />
    </PhotosContainer>
  );
};
