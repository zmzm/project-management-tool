import { render, shallow } from 'enzyme';
import * as React from 'react';
import { BoardContent } from './BoardContent';

const textStub = 'TextTextTextTextTextTextTextTextTextTextText';

describe('BoardContent core component:', () => {
  it('shallow renders without crashing', () => {
    shallow(<BoardContent />);
  });

  it('renders text content, which was passed through children prop', () => {
    const renderResult = render(<BoardContent>{textStub}</BoardContent> );
    expect(renderResult.text()).toBe(textStub);
  });
});
