import * as React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonWithIcon } from './ui';

interface IApp {
  children?: React.ReactChild;
}

const App: React.SFC<IApp> = () => (
  <React.Fragment>
    <Button size="big" type="primary">
      Push Me
    </Button>
    <Button size="medium" type="alert">
      Push Me
    </Button>
    <Button>
      Push Me
    </Button>
    <ButtonWithIcon icon={faCoffee} position="left" iconColor="red">
      Push Me
    </ButtonWithIcon>
    <ButtonWithIcon icon={faCoffee} position="right" type="primary" size="big">
      Push Me
    </ButtonWithIcon>
  </React.Fragment>
);

export default App;
