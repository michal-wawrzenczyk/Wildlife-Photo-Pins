import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectedPhotoSelector, getSelectedPhotoById } from '../../../../../store/selectors/selectors';
import { Link, useParams } from 'react-router-dom';

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
  const { photoId } = useParams()
  const selectedPhoto = useSelector(selectedPhotoSelector);
  const selectedPhotoById = useSelector(getSelectedPhotoById(photoId));
  const [value, setValue] = React.useState(0);

  console.log('params', photoId)
  console.log('selectedPhotoById', selectedPhotoById)
  // const { author, photoUrl, species, description, location } = selectedPhoto;
  const { author, photoUrl, species, description, location } = selectedPhotoById;


  // useParams (wyciągnąć ID, hook useSelectedPhoto i wygenerować asynchroniczną akcję - będzie updatować selectedPhotoID)
  // i zaktualizować stora

  // getSelectedPhotoByID

  // console.log('$$SELECTOR', {
  //   author,
  //   photoUrl,
  //   species,
  //   description,
  //   location
  // });

  return (
    <DetailsCardContainer>
      <Card sx={{ Width: '100%', Height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={photoUrl || ''}
            alt={species || ''}
          />
          <Rating
            name="simple-controlled"
            value={value}
            sx={{
              margin: '0.5rem'
            }}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <>{species || ''}</>
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              <>
                {location?.province || ''}, {location?.city || ''}
              </>
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              <>{author || ''}</>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <>{description || ''}</>
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

{
  /* {[].map(item => (
  <>
    <div></div>
    <div></div>
    <div></div>
  </>

))} */
}

// check default
