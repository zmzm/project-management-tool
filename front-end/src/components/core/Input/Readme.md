Basic input:

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Input
    label="Basic"
    placeholder="Basic placeholder"
    variant="default"
    onChange={value => console.log(value)}
  />
</div>
```

Input without label:

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Input
    placeholder="Basic placeholder"
    variant="default"
    onChange={value => console.log(value)}
  />
</div>
```

Disabled input:

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Input
    value="Disabled input text"
    variant="default"
    disabled
    onChange={value => console.log(value)}
  />
</div>
 ```

`<textarea />` has the same interface as `<input />`, there is textarea:

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf', minHeight: '3rem', position: 'relative' }}>
  <Input
    label="About"
    type="textarea"
    placeholder="Type something"
    variant="default"
    onChange={value => console.log(value)}
  />
</div>
 ```    