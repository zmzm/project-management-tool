import { shallowWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import * as React from 'react';
import Spinner from './index';

// TODO: it's needed to rewrite Spinner component using 'css' emotion helper, insted of 'styled'
// it's needed to reduce wrapper count and because our enzyme-emotion helpers are not appropriate 
// for work with this component, and we have to pass theme prop manually

const theme = {
  bg: 'gray',
  roller: 'black',
  stub: 'blue',
};

describe('<Spinner />', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<Spinner theme={theme} />);
  });
});