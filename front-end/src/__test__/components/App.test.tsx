import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from '../../containers/App';

configure({ adapter: new Adapter.default() });

test('App component loaded successfully', () => {
  mount(<App />);
});
