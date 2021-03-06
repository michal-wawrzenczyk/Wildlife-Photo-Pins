import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provinces } from '../../app/components/main/filter/province';
import { DUMMY_PHOTOS } from '../../app/components/mock/mock';
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
  province: Provinces;
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
    province: Provinces.None
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
    setSelectedPhoto(
      state: GalleryStateInterface,
      action: PayloadAction<SelectedPhoto>
    ): void {
      if (action.payload) {
        state.selectedPhoto = action.payload;
      }
    }
  }
});

const { actions, reducer: galleryReducer } = gallerySlice;

export const { setFilteredPhotos, setFilters, setSelectedPhoto } = actions;
export default galleryReducer;
