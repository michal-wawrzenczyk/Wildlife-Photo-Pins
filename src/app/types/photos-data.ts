import { Province } from '../components/filter/filters/province';

export interface Location {
  lat?: number;
  lon?: number;
  city?: string;
  province?: Province;
}

export interface PhotosData {
  author: string;
  species: string;
  category: string;
  photoUrl: string;
  photoId: number;
  uploadTimeStamp: number;
  description?: string;
  location?: Location;
  avgValue: number | null;
  ratingValues: number[];
}
