import * as React from 'react';
import { shallowWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import { CardList } from './CardList';

const props = {
  listName: 'Test list',
  cards: [],
};

describe('<CardList />', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<CardList {...props} />);
  });
});
