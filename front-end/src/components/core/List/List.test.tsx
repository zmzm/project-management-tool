import * as React from 'react';
import { shallowWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import { List } from './List';

const props = {
  cards: [],
  listName: 'Test list',
};

describe('<List />', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<List {...props} />);
  });
});
