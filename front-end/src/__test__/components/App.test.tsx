import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from '../../components/App';

configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  const app = shallow(<App />);
  expect(app.text()).toEqual('Hello, Trello!');
});
