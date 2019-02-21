import { shallowWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import * as React from 'react';
import { CardList } from './CardList';

const props = {
  listName: 'Test list',
};

describe('<CardList />', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<CardList { ...props } />);
  });
});