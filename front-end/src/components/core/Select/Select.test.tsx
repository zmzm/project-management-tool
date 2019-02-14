import { shallowWithTheme, mountWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import * as React from 'react';
import { Select, SelectVariants } from './Select';

const state = {
  value: null,
};

const requiredProps = {
  variant: SelectVariants.Default,
  options: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ],
  onChange: value => {
    state.value = value;
  },
};

const optionalProps = {
  placeholder: 'test-placeholder',
  disabled: true,
  value: 'stub value',
  label: 'test label',
};

afterEach(() => state.value = null);

describe('Select core component:', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<Select {...requiredProps} />);
  });

  it(`passes event.target.value to onChange prop as a parameter, when select changed`, () => {
    const mockValue = 'mockValue';
    const mountWrapper = mountWithTheme(<Select {...requiredProps} />);
    mountWrapper.find('select').first().simulate('change', { target: { value: mockValue} });

    expect(state.value).toEqual(mockValue);
  });

  it('sets select\'s placeholder based on "placeholder" prop value', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} placeholder={optionalProps.placeholder} />);

    expect(mountWrapper.find('select').first().props().placeholder).toEqual(optionalProps.placeholder);
  });

  it('disable select when "disabled" prop set to true', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} disabled={optionalProps.disabled} />);

    expect(mountWrapper.find('select').first().props().disabled);
  });

  it('sets default select value based on "value" prop', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} value={optionalProps.value} />);

    expect(mountWrapper.find('select').first().props().value).toEqual(optionalProps.value);
  });

  it('renders label if it was set', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} label={optionalProps.label} />);

    expect(mountWrapper.find('label').first().text()).toEqual(optionalProps.label);
  });

  it('doesn\'t render label, if it was not set', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} />);

    expect(mountWrapper.find('label').length).toEqual(0);
  });

  it('renders all options with appropriate values', () => {
    const mountWrapper = mountWithTheme(<Select {...requiredProps} />);
    const options = mountWrapper.find('select').first().find('option');

    expect(options.length).toEqual(requiredProps.options.length);

    options.forEach((element, index) => {
      expect(element.props().value).toEqual(requiredProps.options[index].value);
      expect(element.props().children).toEqual(requiredProps.options[index].label);
    });
  });
});