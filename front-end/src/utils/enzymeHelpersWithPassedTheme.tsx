    import * as React from 'react';
    import { mount, render, shallow } from 'enzyme';
    import { channel, createBroadcast } from 'emotion-theming';
    import * as PropTypes from 'prop-types';
    import defaultTheme from '../themes/default';

    const broadcast = createBroadcast(defaultTheme);

    const defaultOptions = {
      childContextTypes: {
        [channel]: PropTypes.object,
      },
      context: {
        [channel]: broadcast,
      },
      theme: defaultTheme,
    };

    function wrapWithTheme (fn: (component: React.ReactElement, mergedOptions: any) => any, component: React.ReactElement, options: any): any {
      const mergedOptions = Object.assign({}, defaultOptions, options);
      return fn(component, mergedOptions);
    }

    export function shallowWithTheme (component: React.ReactElement, options?: any): any {
      return wrapWithTheme(shallow, component, options);
    }

    export function mountWithTheme (component: React.ReactElement, options?: any): any {
      return wrapWithTheme(mount, component, options);
    }

    export function renderWithTheme (component: React.ReactElement, options?: any): any {
      return wrapWithTheme(render, component, options);
    }