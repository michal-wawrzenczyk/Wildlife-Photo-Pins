import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { useDispatch, useSelector } from 'react-redux';
import _uniq from 'lodash/uniq';

export const SpeciesFilter: React.FC = () => {
  const { filtersSelector, gallerySelector } = gallerySelectors;
  const filters = useSelector(filtersSelector);
  const gallery = useSelector(gallerySelector);
  const dispatch = useDispatch();

  const speciesArray = _uniq(gallery.map((photoInfo) => photoInfo.species));

  const authorHandler = (species: string): void => {
    dispatch(filterPhotosAction({ ...filters, species: species }));
  };

  // {
  //   React.ReactNode
  //   React.ReactElement
  //   React.ReactChild
  // }

  return (
    <Autocomplete
      disablePortal
      id="species-combo-box-demo"
      options={speciesArray}
      autoHighlight
      onChange={(event, value): void => {
        const species = value as string;
        authorHandler(species);
      }}
      renderInput={(params): React.ReactNode => (
        <TextField {...params} label="Name of species..." />
      )}
    />
  );
};
