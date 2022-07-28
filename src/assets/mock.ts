import { PhotosData } from '../app/types/photos-data';
import { Province } from '../app/components/filter/filters/province';

export const DUMMY_PHOTOS: PhotosData[] = [
  {
    author: 'Michał Wawrzeńczyk',
    species: 'Jeleń szlachetny',
    category: 'Mammals',
    photoUrl: 'http://gdlugosz.com/wp-content/uploads/2021/09/jele%C5%84-8.jpg',
    photoId: 1,
    uploadTimeStamp: 1644407846,
    description: 'Cervus elaphus',
    location: {
      lat: 52.89056,
      lon: 18.606074,
      city: 'Toruń',
      province: Province.KujawskoPomorskie
    },
    avgValue: 0,
    ratingValues: []
  },
  {
    author: 'Grzegorz Długosz',
    species: 'Szlamnik',
    category: 'Birds',
    photoUrl:
      'http://gdlugosz.com/wp-content/uploads/2020/04/Commonsnipe-3.jpg',
    photoId: 2,
    uploadTimeStamp: 1644407846,
    description: 'Bar-tailed godwit (Limosa lapponica)',
    location: {
      lat: 54.346697,
      lon: 18.978066,
      city: 'Mikoszewo',
      province: Province.Pomorskie
    },
    avgValue: 0,
    ratingValues: []
  },
  {
    author: 'Michał Wawrzeńczyk',
    species: 'Padalec zwyczajny',
    category: 'Reptiles',
    photoUrl: 'https://www.tfp.net.pl/users/3669/39501',
    photoId: 3,
    uploadTimeStamp: 1644407846,
    description: 'Slow worm (Anguis fragilis)',
    location: {
      lat: 50.298655,
      lon: 18.335984,
      city: 'Stara Kuźnia',
      province: Province.Opolskie
    },
    avgValue: 0,
    ratingValues: []
  },
  {
    author: 'Michał Wawrzeńczyk',
    species: 'Modliszka',
    category: 'Insects',
    photoUrl: 'https://www.tfp.net.pl/users/148/1855',
    photoId: 4,
    uploadTimeStamp: 1644407846,
    description: 'European mantis (Mantis religiosa)',
    location: {
      lat: 52.920913,
      lon: 18.561913,
      city: 'Toruń',
      province: Province.KujawskoPomorskie
    },
    avgValue: 0,
    ratingValues: []
  },
  {
    author: 'Michał Wawrzeńczyk',
    species: 'Salamandra plamista',
    category: 'Amphibians',
    photoUrl:
      'https://przyrodniczo.pl/wp-content/uploads/2017/11/salamandra6.jpg',
    photoId: 5,
    uploadTimeStamp: 1644407846,
    description: 'Fire salamander (Salamandra salamandra)',
    location: {
      lat: 49.524741,
      lon: 20.076949,
      city: 'Nowy Targ',
      province: Province.Malopolskie
    },
    avgValue: 0,
    ratingValues: []
  },
  {
    author: 'Grzegorz Długosz',
    species: 'Żubr',
    category: 'Mammals',
    photoUrl: 'http://gdlugosz.com/wp-content/uploads/2021/01/%C5%BCubr-7.jpg',
    photoId: 6,
    uploadTimeStamp: 1644407846,
    description: 'European bison (Bos bonasus)',
    location: {
      lat: 52.712206,
      lon: 23.825461,
      city: 'Białowieża',
      province: Province.Podlaskie
    },
    avgValue: 0,
    ratingValues: []
  }
];
