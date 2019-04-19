import * as React from 'react';
import { Text, TextWeight } from 'src/components/core/Text/Text';

export default class SignUp extends React.PureComponent<{}> {
  public render() {
    return (
      <Text component='h1' fontSize='2.3' color='#333' weight={TextWeight.Bold}>
        Create a Huello Account
      </Text>
    );
  }
}