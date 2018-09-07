Basic input:

```jsx
<Input
    label="Basic"
    placeholder="Basic placeholder"
    type="default"
    onChange={value => setState({ value })}
/>
```

Input without label:

```jsx
<Input
    placeholder="Basic placeholder"
    type="default"
    onChange={value => setState({ value })}
/>
```

Disabled input:

```jsx
<Input
    value="Disabled input text"
    type="default"
    disabled
    onChange={value => setState({ value })}
/>
 ```   