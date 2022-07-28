import { Ifilters, SelectedPhoto } from '../slices/gallery';
import { RootState } from '../slices/types';
import { PhotosData } from '../../app/types/photos-data';

const filtersSelector = (state: RootState): Ifilters =>
  state.galleryState.filters;

const gallerySelector = (state: RootState): PhotosData[] =>
  state.galleryState.gallery;

const selectedPhotoSelector = (state: RootState): SelectedPhoto =>
  state.galleryState.selectedPhoto;

const getSelectedPhotoById =
  // (paramID: string | undefined)
  (paramID?: string) =>
  (state: RootState): PhotosData | undefined => {
    return state.galleryState.gallery.find(
      (photo) => photo.photoId === Number(paramID)
    );
  };

export const gallerySelectors = {
  filtersSelector,
  gallerySelector,
  selectedPhotoSelector,
  getSelectedPhotoById
};
