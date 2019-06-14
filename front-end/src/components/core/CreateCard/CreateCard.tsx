import * as React from 'react';

import { Formik } from 'formik';
import { css } from 'emotion';
import { Card } from '../Card/Card';
import { Input, InputTypes, InputVariants } from '../Input/Input';
import { Margin } from '../Margin/Margin';
import { Button, ButtonSize } from '../Button/Button';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Icon, IconSize } from '../Icon/Icon';
import colors from '../../../styles/default/colors';
import { ICONS } from '../../../consts/icons';

export interface ICreateCardProps {
  handleSubmit(value: any): void;
  showForm(value: boolean): void;
}

const formContentWrapperCss = css`
  display: flex;
  align-items: center;
`;

export class CreateCard extends React.Component<ICreateCardProps> {
  public state = { inputValue: '' };

  public render() {
    const { showForm } = this.props;

    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => {
          this.props.handleSubmit(values.name);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <Card
              cardName={
                <Input
                  name="name"
                  placeholder="Enter new card name"
                  type={InputTypes.Text}
                  variant={InputVariants.Default}
                  onChange={handleChange}
                  value={values.name}
                />
              }
            />
            <div className={formContentWrapperCss}>
              <Margin margin="0 1.3rem 0 0">
                <Button
                  type="submit"
                  size={ButtonSize.Big}
                  color={colors.green}
                >
                  <Text
                    component="span"
                    fontSize={TextSize.Normal}
                    color={colors.white}
                    weight={TextWeight.Bold}
                  >
                    Create card
                  </Text>
                </Button>
              </Margin>
              <Icon
                onClick={showForm(false)}
                size={IconSize.Big}
                name={ICONS.CLOSE}
                color={colors.grayDark}
              />
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
