Basic select:

```jsx
initialState = {
  value: null,
  options: [{
    value: 'user', label: 'User'
  }, {
    value: 'group', label: 'Group'
  }]
};

<Select
    placeholder="Basic placeholder"
    variant="default"
    value={state.value}
    onChange={(value) => setState({ value })}
    options={state.options}
/>
```    

Select with label:

```jsx
initialState = {
  value: {
    value: 'user', label: 'User'
  },
  options: [{
    value: 'user', label: 'User'
  }, {
    value: 'group', label: 'Group'
  }]
};

<Select
    label="Basic"
    variant="default"
    value={state.value}
    onChange={(value) => setState({ value })}
    options={state.options}
/>
``` 

Disabled select:

```jsx
initialState = {
  value: {
    value: 'user', label: 'User'
  },
  options: [{
    value: 'user', label: 'User'
  }, {
    value: 'group', label: 'Group'
  }]
};

<Select
    value="Disabled input text"
    variant="default"
    disabled
    onChange={value => console.log(value)}
    options={state.options}
/>
 ```