import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { AppThunkDispatch } from '../../../../store/reducers/rootReducer';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { Categories, clearFilters } from '../../../../store/slices/gallery';
import { Button } from '@mui/material';

const categories = [
  Categories.BIRDS,
  Categories.MAMMALS,
  Categories.REPTILES,
  Categories.AMPHIBIANS,
  Categories.INSECTS
];

export const NavFilter: React.FC = () => {
  const { filtersSelector } = gallerySelectors;
  const dispatch = useDispatch<AppThunkDispatch>();
  const filters = useSelector(filtersSelector);

  const onClick = useCallback(
    (category: Categories): Promise<void> => {
      return dispatch(filterPhotosAction({ ...filters, category }));
    },
    [dispatch, filters]
  );

  const clearFiltersHandler = (): void => {
    dispatch(clearFilters());
  };

  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <NavLink onClick={(): Promise<void> => onClick(category)} to="/">
                {category}
              </NavLink>
            </li>
          );
        })}
        <li>
          <Button onClick={(): void => clearFiltersHandler()}>
            Clear Filters
          </Button>
        </li>
      </ul>
    </nav>
  );
};
