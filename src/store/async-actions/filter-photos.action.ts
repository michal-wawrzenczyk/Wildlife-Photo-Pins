import { AppThunkAction } from '../reducers/rootReducer';
import { DUMMY_PHOTOS } from '../../assets/mock';
import {
  Categories,
  Ifilters,
  setFilteredPhotos,
  setFilters
} from '../slices/gallery';
import { PhotosData } from '../../app/types/photos-data';

// back-end simulation:
const getFilteredData = ({
  category,
  province,
  author,
  species
}: Ifilters): Promise<PhotosData[]> => {
  let data = [...DUMMY_PHOTOS];

  return new Promise((resolve) => {
    if (category) {
      if (category === Categories.ALL_PICTURES) {
        // data = data;
      } else {
        data = data.filter((picture) => {
          return picture.category === category;
        });
      }
    }

    if (province) {
      data = data.filter((picture) => {
        return picture.location?.province === province;
      });
    }

    if (author) {
      data = data.filter((picture) => {
        return picture.author === author;
      });
    }

    if (species) {
      data = data.filter((picture) => {
        return picture.species === species;
      });
    }

    return setTimeout(() => resolve(data), Math.random() * 2000);
    // reject state can be
  });
};

// filterPhotosAction can be used everywhere - e.g. in hook (dispatch must be used because "thunk")
export const filterPhotosAction = (filters: Ifilters): AppThunkAction => {
  return async function thunk(dispatch): Promise<void> {
    try {
      const filteredData = await getFilteredData(filters);
      dispatch(setFilteredPhotos(filteredData));
      dispatch(setFilters(filters));
    } catch (err) {
      console.log(err);
    }
  };
};
