import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Province, provinces } from './province';
import { useDispatch, useSelector } from 'react-redux';
import { gallerySelectors } from '../../../../store/selectors/selectors';
import { filterPhotosAction } from '../../../../store/async-actions/filter-photos.action';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export const ProvinceFilter: React.FC = () => {
  const { filtersSelector } = gallerySelectors;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const [province, setProvince] = useState('');

  // enum instead of string
  const provinceHandler = (provinceName: Province): void => {
    setProvince(provinceName);
    dispatch(filterPhotosAction({ ...filters, province: provinceName }));
  };

  return (
    <FormControl>
      <InputLabel id="province-select-helper-label">Province</InputLabel>
      <Select
        labelId="province-select-helper-label"
        id="province-select"
        label="province"
        value={province}
        // sx={{ width: 220 }}
        // MenuProps={MenuProps}
        onChange={(event): void => {
          const provinceName = event.target.value as Province;
          provinceHandler(provinceName);
        }}>
        <MenuItem value={''}>None</MenuItem>
        {provinces.map((provinceName, index) => (
          <MenuItem
            onClick={(): void => navigate(`/province/${provinceName}`)}
            key={`${provinceName}-${index}`}
            value={provinceName}>
            {provinceName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// when mapping elements, key must be defined
// if drag and drop function - then id is better, than index
