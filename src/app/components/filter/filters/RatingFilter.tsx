import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const RatingFilter: React.FC = () => {
  const [rating, setRating] = useState('');

  return (
    <FormControl>
      <InputLabel id="rating-select-helper-label">Rating</InputLabel>
      <Select
        autoWidth={true}
        labelId="rating-select-helper-label"
        id="rating-select"
        label="rating"
        value={rating}
        onChange={(event): void => setRating(event.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5 stars</MenuItem>
        <MenuItem value={4}>4 stars</MenuItem>
        <MenuItem value={3}>3 stars</MenuItem>
        <MenuItem value={2}>2 stars</MenuItem>
        <MenuItem value={1}>1 stars</MenuItem>
      </Select>
    </FormControl>
  );
};
