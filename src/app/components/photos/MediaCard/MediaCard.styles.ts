import makeStyles from '@mui/styles/makeStyles';

export const useMediaCardStyles = makeStyles(
  () => ({
    overlayContainer: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 10,
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
  }),
  { name: 'mediaCardStyles' }
);
