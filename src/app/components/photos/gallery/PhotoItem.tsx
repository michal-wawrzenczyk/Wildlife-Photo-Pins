import React from 'react';
import styled from 'styled-components';
import { MediaCard } from '../MediaCard/MediaCard';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.25rem;

  img {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export interface PhotoItemProps {
  photoUrl: string;
  photoId: number;
  author: string;
  species: string;
  description?: string;
  location?: object;
}

export const PhotoItem: React.FC<PhotoItemProps> = ({
  photoUrl,
  photoId,
  author,
  species,
  description = '',
  location = null
}) => {
  return (
    <Card>
      <MediaCard
        url={photoUrl}
        photoId={photoId}
        author={author}
        species={species}
        description={description}
        location={location ?? {}}
      />
    </Card>
  );
};
