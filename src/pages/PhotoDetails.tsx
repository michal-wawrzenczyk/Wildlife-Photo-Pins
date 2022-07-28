import React from 'react';
import styled from 'styled-components';
import { DetailsCard } from '../app/components/photos/gallery/DetailsCard';
import { Map } from '../app/components/photos/map/Map';

const PhotoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  column-gap: 0.5rem;
  padding: 0.5rem;
`;

interface PhotoDetailsProps {
  image: string;
}

export const PhotoDetails: React.FC<PhotoDetailsProps> = () => {
  return (
    <PhotoDetailsContainer>
      <DetailsCard />
      <Map />
    </PhotoDetailsContainer>
  );
};

export default PhotoDetails;
