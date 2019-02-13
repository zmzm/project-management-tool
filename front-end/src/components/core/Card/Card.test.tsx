import { shallow } from 'enzyme';
import { mountWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme'
import * as React from 'react';
import { matchers } from 'jest-emotion'
import { Card } from './Card';
import { Text } from '../Text/Text';
import { Margin } from '../Margin/Margin';

expect.extend(matchers);

const props = {
  cardName: 'test card',
  colorMark: ['#f2d600', 'red', 'green', 'pink', 'coral', 'aqua'],
  commentsCount: 7,
};

describe('Card core component:', () => {
  it('shallow renders without crashing', () => {
    shallow(<Card {...props} />);
  });

  it('mount with only one passed prop, which is required - "cardName" prop', () => {
    const mountedCard = mountWithTheme(<Card cardName={props.cardName} />);
    const textComponents = mountedCard.find(Text);

    expect(textComponents.length).toEqual(2);
    expect(textComponents.first().props()['children'] === props.cardName);
  });

  it('mount with only "cardName" prop, which is required', () => {
    const mountedCard = mountWithTheme(<Card cardName={props.cardName} />);
    const textComponents = mountedCard.find(Text);
    const colorMarkSpans = mountedCard.find(Margin).first().find('div').first().find('span');

    expect(textComponents.length).toEqual(2);
    expect(textComponents.first().props()['children']).toEqual(props.cardName);
    expect(colorMarkSpans.length).toEqual(0);
  });

  it('mount with "cardName", "colorMark", and "commentsCount"', () => {
    const mountedCard = mountWithTheme(<Card {...props} />);
    const colorMarkSpans = mountedCard.find(Margin).first().find('div').first().find('span');
    const commentsCountTextComponent = mountedCard.find(Text).at(1);

    expect(colorMarkSpans.length).toBe(props.colorMark.length);
    expect(commentsCountTextComponent.props().children).toEqual(props.commentsCount);
  });
});