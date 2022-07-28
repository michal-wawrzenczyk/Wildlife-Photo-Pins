import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { Link, useParams } from 'react-router-dom';
import { setRating } from '../../../../store/slices/gallery';

const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-content: center;

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.2rem;
  }
`;

export const DetailsCard: React.FC = () => {
  const dispatch = useDispatch();
  const { getSelectedPhotoById } = gallerySelectors;
  const { photoId } = useParams();
  const selectedPhotoById = useSelector(getSelectedPhotoById(photoId));
  // const [value, setValue] = useState(0);
  const photoData = useSelector(getSelectedPhotoById(String(photoId)));

  return (
    <DetailsCardContainer>
      <Card sx={{ Width: '100%', Height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={selectedPhotoById?.photoUrl}
            alt={selectedPhotoById?.species}
          />
          <Rating
            name="simple-controlled"
            value={photoData?.avgValue}
            sx={{
              margin: '0.5rem'
            }}
            onChange={(event, newValue) => {
               if (!!newValue && photoId !== 'undefined') {
                dispatch(setRating({photoId: Number(photoId), value: newValue}));
              }
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedPhotoById?.species}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {selectedPhotoById?.location?.province},
              {selectedPhotoById?.location?.city}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              {selectedPhotoById?.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedPhotoById?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'/'}>
            <Button size="small" color="primary">
              Back to gallery
            </Button>
          </Link>
        </CardActions>
      </Card>
    </DetailsCardContainer>
  );
};

// grid -> https://mui.com/material-ui/react-grid/
// https://pl.reactjs.org/docs/fragments.html
