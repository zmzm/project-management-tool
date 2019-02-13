import { shallowWithTheme, renderWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme'
import * as React from 'react';
import { Text } from './Text';

const textStub = 'TextTextTextTextTextTextTextTextTextTextText';

describe('Text core component:', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<Text />);
  });

  it('renders text content, which was passed through children prop', () => {
    const renderResult = renderWithTheme(<Text>{textStub}</Text>);
    expect(renderResult.text()).toBe(textStub);
  });
});