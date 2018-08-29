import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from '../../components/App';

configure({ adapter: new Adapter() });

test('App component loaded successfully', () => {
  mount(<App />);
});
