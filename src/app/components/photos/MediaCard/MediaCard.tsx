import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useMediaCardStyles } from './MediaCard.styles';
import { setRating, setSelectedPhoto } from '../../../../store/slices/gallery';
import { useDispatch, useSelector } from 'react-redux';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { CardActions } from '@mui/material';

export interface MediaCardProps {
  url: string;
  photoId: number;
  author: string;
  species: string;
  description?: string;
  location?: object;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  url,
  photoId,
  author,
  species,
  description,
  location
}: MediaCardProps) => {
  // const [value, setValue] = useState<number[]>([]);
  // const [avgValue, setAvgValue] = useState<number | null>(null);
  const photoData = useSelector(
    gallerySelectors.getSelectedPhotoById(String(photoId))
  );
  const dispatch = useDispatch();
  const classes = useMediaCardStyles();

  const doSomething = (): void => {
    dispatch(
      setSelectedPhoto({
        author,
        species,
        description: description ?? '',
        location: location ?? {},
        photoUrl: url,
        photoId
      })
    );
  };

  const getAverage = (array: number[]): number => {
    // shorter:
    // a = accumulator, b = current value
    const sum = array.reduce((a, b) => a + b, 0);
    // divide sum by amount of numbers
    return Math.round(sum / array.length);
  };

  // TODO: lifecycle hooks - dokumentacja reacta
  // useEffect(() => {
  //   setAvgValue(getAverage(value));
  // }, [value]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        margin: '0.5rem'
      }}>
      <Link onClick={(): void => doSomething()} to={`/details/${photoId}`}>
        <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          <CardMedia component="img" image={url} />
        </div>
      </Link>
      <Rating
        name="simple-controlled"
        value={photoData?.avgValue}
        // newValue otrzymujemy jako null | number, value jest jako number
        onChange={(event, newValue) => {
          if (typeof newValue === 'number') {
            dispatch(setRating({ photoId: photoId, value: newValue }));
          }
        }}
        sx={{
          margin: '0.5rem'
        }}
      />
      <CardActions>Upload date placeholder</CardActions>
    </Card>
  );
};
