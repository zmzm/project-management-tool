import { mountWithTheme, shallowWithTheme } from '../../../utils/enzymeHelpersWithPassedTheme';
import * as React from 'react';
import { Input, InputTypes, InputVariants } from './Input';

const state = {
  value: null,
};

const requiredProps = {
  name: 'name',
  onChange: value => {
    state.value = value;
  },
  type: InputTypes.Text,
  variant: InputVariants.Default,
};

const optionalProps = {
  disabled: true,
  label: 'test label',
  placeholder: 'test placeholder',
  value: 'test value',
};

afterEach(() => state.value = null);

describe('<Input />', () => {
  it('shallow renders without crashing', () => {
    shallowWithTheme(<Input {...requiredProps} />);
  });

  it('render input element for all types excluding "TextArea"', () => {
    const mountWrapperWithTextType = mountWithTheme(<Input {...requiredProps} />);
    const mountWrapperWithEmailType = mountWithTheme(<Input {...requiredProps} type={InputTypes.Email} />);
    const mountWrapperWithNumberType = mountWithTheme(<Input {...requiredProps} type={InputTypes.Number} />);
    const mountWrapperWithPasswordType = mountWithTheme(<Input {...requiredProps} type={InputTypes.Password} />);
    const mountWrapperWithTextAreaType = mountWithTheme(<Input {...requiredProps} type={InputTypes.TextArea} />);

    expect(mountWrapperWithTextType.find('input').first().length).toEqual(1);
    expect(mountWrapperWithEmailType.find('input').first().length).toEqual(1);
    expect(mountWrapperWithNumberType.find('input').first().length).toEqual(1);
    expect(mountWrapperWithPasswordType.find('input').first().length).toEqual(1);

    expect(mountWrapperWithTextAreaType.find('textarea').first().length).toEqual(1);
  });

  it('passes event.target.value to onChange prop as a parameter, when text inputed', () => {
    const mockValue = 'mockValue';
    const mountWrapper = mountWithTheme(<Input {...requiredProps} />);
    mountWrapper.find('input').first().simulate('change', { target: { value: mockValue} });

    expect(state.value).toEqual(mockValue);
  });

  it('sets input\'s placeholder based on "placeholder" prop value', () => {
    const mountWrapper = mountWithTheme(<Input {...requiredProps} placeholder={optionalProps.placeholder} />);

    expect(mountWrapper.find('input').first().props().placeholder).toEqual(optionalProps.placeholder);
  });

  it('disable input when "disabled" prop set to true', () => {
    const mountWrapper = mountWithTheme(<Input {...requiredProps} disabled={optionalProps.disabled} />);

    expect(mountWrapper.find('input').first().props().disabled);
  });

  it('sets default input value based on "value" prop', () => {
    const mountWrapper = mountWithTheme(<Input {...requiredProps} value={optionalProps.value} />);

    expect(mountWrapper.find('input').first().props().value).toEqual(optionalProps.value);
  });

  it('renders label if it was set', () => {
    const mountWrapper = mountWithTheme(<Input {...requiredProps} label={optionalProps.label} />);

    expect(mountWrapper.find('label').first().text()).toEqual(optionalProps.label);
  });

  it('doesn\'t render label, if it was not set', () => {
    const mountWrapper = mountWithTheme(<Input {...requiredProps} />);

    expect(mountWrapper.find('label').length).toEqual(0);
  });

});