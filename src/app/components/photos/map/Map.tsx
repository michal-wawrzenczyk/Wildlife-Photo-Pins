import React from 'react';
import styled from 'styled-components';
import { DUMMY_PHOTOS } from '../../../../assets/mock';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { MarkerButton } from '../../shared/buttons/MarkerButton-styles';

export const MapContainerDiv = styled.div`
  width: 50%;
  background-color: whitesmoke;
  text-align: center;
  height: 100%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Map: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MapContainerDiv>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[51.919438, 19.145136]}
        zoom={6}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DUMMY_PHOTOS.map((pic) => {
          if (pic.location?.lat && pic.location?.lon) {
            return (
              <Marker
                key={pic.photoId}
                position={[pic.location?.lat, pic.location?.lon]}>
                <Popup>
                  <b>{pic.species}</b> <br /> {pic.author} <br />
                  <MarkerButton
                    className="marker-button"
                    onClick={(): void => navigate(`/details/${pic.photoId}`)}>
                    Show details
                  </MarkerButton>
                </Popup>
              </Marker>
            );
          }
        })}
      </MapContainer>
    </MapContainerDiv>
  );
};
