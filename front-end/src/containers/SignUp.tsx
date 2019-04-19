import * as React from 'react';
import { Text, TextWeight } from 'src/components/core/Text/Text';
import { Padding } from 'src/components/core/Padding/Padding';
import { PageSection } from 'src/components/core/PageSection/PageSection';

export default class SignUp extends React.PureComponent<{}> {
  public render() {
    return (
      <section>
        <Padding padding='10rem 1rem'>
          <PageSection margin='0 auto' maxWidth={400}>
            <Text component='h1' fontSize='4.5' color='#fff' weight={TextWeight.Bold}>
              Create Account
            </Text>
            
          </PageSection>
        </Padding>
      </section>
    );
  }
}