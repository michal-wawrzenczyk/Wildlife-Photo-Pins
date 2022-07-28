import { Theme, Components } from '@mui/material';
import merge from 'lodash/merge';
import { createButton } from './button';
import { createSelect } from './select';
import { createAutocomplete } from './autocomplete';

export function createComponentsOverrides(theme: Theme): Components {
  return merge(
    createButton(theme),
    createSelect(theme),
    createAutocomplete(theme)
  );
}
