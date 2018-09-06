import * as React from 'react';
import styled from '../../../libs/styled-components-with-theme-anotation';

export const InputVariants = {
  Default: 'default',
  Inverted: 'inverted',
};

interface InputProps {
    type: string,
    width?: number;
}

const Input = styled<InputProps, 'input'>('input')`
    color: ${({ type, theme }) => theme.input[type].textColor};
    font-size: 1em;
    background: ${({ type, theme }) => theme.input[type].bg};
    border: ${({ type, theme }) => theme.input[type].border};
    border-radius: 3px;
    width: ${({ width }) => width || '200px'};
    margin: 1em;
    padding: 1em;
`;

const StyledInput = (props: InputProps) => <Input {...props} />;

/** @component */
export default StyledInput;
