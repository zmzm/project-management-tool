import { shallow } from 'enzyme';
import * as React from 'react';
import { mountWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import { Text } from '../Text/Text';
import { Margin } from '../Margin/Margin';
import { Card } from './Card';

const props = {
  cardName: 'test card',
  labels: ['#f2d600', 'red', 'green', 'pink', 'coral', 'aqua'],
  commentsCount: 7,
};

describe('<Card />', () => {
  it('shallow renders without crashing', () => {
    shallow(<Card {...props} />);
  });

  it('mount with only "cardName" prop, which is required', () => {
    const mountedCard = mountWithTheme(<Card cardName={props.cardName} />);
    const textComponents = mountedCard.find(Text);
    const colorMarkSpans = mountedCard
      .find(Margin)
      .first()
      .find('div')
      .first()
      .find('span');

    expect(textComponents.length).toEqual(2);
    expect(colorMarkSpans.length).toEqual(0);
    expect(textComponents.first().props().children).toEqual(props.cardName);
  });

  it('mount with "cardName", "labels", and "commentsCount" props ', () => {
    const mountedCard = mountWithTheme(<Card {...props} />);
    const colorMarkSpans = mountedCard
      .find(Margin)
      .first()
      .find('div')
      .first()
      .find('span');
    const commentsCountTextComponent = mountedCard.find(Text).at(1);

    expect(colorMarkSpans.length).toBe(props.labels.length);
    expect(commentsCountTextComponent.props().children).toEqual(
      props.commentsCount,
    );
  });
});
