    import * as React from 'react'
    import { shallow, mount, render } from 'enzyme'
    import { channel, createBroadcast } from 'emotion-theming'
    import * as PropTypes from 'prop-types';
    import defaultTheme from '../themes/default';

    const broadcast = createBroadcast(defaultTheme);

    const defaultOptions = {
      theme: defaultTheme,
      context: {
        [channel]: broadcast
      },
      childContextTypes: {
        [channel]: PropTypes.object
      }
    };

    function wrapWithTheme (fn: Function, component: React.ReactChild, options: any): any {
      const mergedOptions = Object.assign({}, defaultOptions, options);
      return fn(component, mergedOptions);
    }

    export function shallowWithTheme (component: React.ReactChild, options?: any): any {
      return wrapWithTheme(shallow, component, options);
    }

    export function mountWithTheme (component: React.ReactChild, options?: any): any {
      return wrapWithTheme(mount, component, options);
    }

    export function renderWithTheme (component: React.ReactChild, options?: any): any {
      return wrapWithTheme(render, component, options);
    }