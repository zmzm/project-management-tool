Basic input:

```jsx
<Input
    label="Basic"
    placeholder="Basic placeholder"
    variant="default"
    onChange={value => console.log(value)}
/>
```

Input without label:

```jsx
<Input
    placeholder="Basic placeholder"
    variant="default"
    onChange={value => console.log(value)}
/>
```

Disabled input:

```jsx
<Input
    value="Disabled input text"
    variant="default"
    disabled
    onChange={value => console.log(value)}
/>
 ```

`<textarea />` has the same interface as `<input />`, there is textarea:

```jsx
<Input
    label="About"
    type="textarea"
    placeholder="Type something"
    variant="default"
    onChange={value => console.log(value)}
/>
 ```    