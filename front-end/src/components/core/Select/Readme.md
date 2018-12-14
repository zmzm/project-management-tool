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

<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Select
    placeholder="Basic placeholder"
    variant="default"
    value={state.value}
    onChange={(value) => setState({ value })}
    options={state.options}
  />
</div>
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

<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Select
    label="Basic"
    variant="default"
    value={state.value}
    onChange={(value) => setState({ value })}
    options={state.options}
  />
</div>
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

<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Select
    value="Disabled input text"
    variant="default"
    disabled
    onChange={value => console.log(value)}
    options={state.options}
  />
</div>
 ```