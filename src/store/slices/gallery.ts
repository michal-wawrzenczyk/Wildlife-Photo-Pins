import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Province } from '../../app/components/filter/filters/province';
import { DUMMY_PHOTOS } from '../../assets/mock';
import { PhotosData } from '../../app/types/photos-data';

export enum Categories {
  BIRDS = 'Birds',
  MAMMALS = 'Mammals',
  REPTILES = 'Reptiles',
  AMPHIBIANS = 'Amphibians',
  INSECTS = 'Insects',
  ALL_PICTURES = 'All pictures'
}

export interface Ifilters {
  author: string;
  species: string;
  rating: number | null;
  category: Categories;
  province: Province;
}

// Define a type for the slice state:
export interface GalleryStateInterface {
  gallery: PhotosData[];
  showGallery: boolean;
  filters: Ifilters;
  selectedPhoto: SelectedPhoto;
}

export interface SelectedPhoto {
  author: string;
  species: string;
  photoUrl: string;
  photoId: number;
  description?: string;
  location?: PhotosData['location'];
}

// Define the initial state using that defined type:
const initialGalleryState: GalleryStateInterface = {
  gallery: DUMMY_PHOTOS,
  showGallery: true,
  filters: {
    author: '',
    species: '',
    rating: null,
    category: Categories.ALL_PICTURES,
    province: Province.None
  },
  selectedPhoto: {
    author: '',
    description: '',
    photoUrl: '',
    photoId: 0,
    species: ''
  }
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialGalleryState,
  reducers: {
    setFilteredPhotos(
      state: GalleryStateInterface,
      action: PayloadAction<PhotosData[] | undefined>
    ): void {
      if (action.payload) {
        state.gallery = action.payload;
      }
    },
    setFilters(
      state: GalleryStateInterface,
      action: PayloadAction<Ifilters>
    ): void {
      if (action.payload) {
        state.filters = action.payload;
      }
    },
    clearFilters(state: GalleryStateInterface): void {
      state.gallery = DUMMY_PHOTOS;
      state.filters = {
        author: '',
        species: '',
        rating: null,
        category: Categories.ALL_PICTURES,
        province: Province.None
      };
    },
    setSelectedPhoto(
      state: GalleryStateInterface,
      action: PayloadAction<SelectedPhoto>
    ): void {
      if (action.payload) {
        state.selectedPhoto = action.payload;
      }
    },
    setRating(
      state: GalleryStateInterface,
      action: PayloadAction<{
        photoId: number;
        value: number;
      }>
    ): void {
      // const photoDetail = state.gallery.find(photo => photo.photoId === photoId)
      console.log('akcja setRating')
      const mappedPhotoData = state.gallery
        .map((photoData) =>
          photoData.photoId === action.payload.photoId
            ? {
                ...photoData,
                ratingValues: [...photoData.ratingValues, action.payload.value]
              }
            : photoData
        )
        .map((photoData) =>
          photoData.photoId === action.payload.photoId
            ? {
                ...photoData,
                avgValue: Math.round(photoData.ratingValues.reduce((a, b) => a + b, 0) / photoData.ratingValues.length)
              }
            : photoData
        )

      state.gallery = mappedPhotoData;
    // mappedPhotoData.reduce((a, b) => a + b, 0);
    // divide sum by amount of numbers
    // return Math.round(sum / array.length);

    }
  }
});

const { actions, reducer: galleryReducer } = gallerySlice;

export const { setFilteredPhotos, setFilters, setSelectedPhoto, clearFilters, setRating } =
  actions;
export default galleryReducer;
