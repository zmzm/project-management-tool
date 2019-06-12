import * as React from 'react';

import { Formik } from 'formik';
import { Card } from '../Card/Card';
import { Input, InputTypes, InputVariants } from '../Input/Input';
import { Margin } from '../Margin/Margin';
import { Button, ButtonSize } from '../Button/Button';
import { Text, TextSize, TextWeight } from '../Text/Text';
import { Icon, IconSize } from '../Icon/Icon';

export interface ICreateCardProps {
  handleSubmit(value: any): void;
  showForm(value: boolean): void;
}

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Margin margin="0 1.3rem 0 0">
                <Button type="submit" size={ButtonSize.Big} color="#5aac44">
                  <Text
                    component="span"
                    fontSize={TextSize.Normal}
                    color="#fff"
                    weight={TextWeight.Bold}
                  >
                    Create card
                  </Text>
                </Button>
              </Margin>
              <Icon
                onClick={showForm(false)}
                size={IconSize.Big}
                name="close"
                color="gray"
              />
            </div>
          </form>
        )}
      </Formik>
    );
  }
}
