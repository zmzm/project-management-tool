Big sized button with text:

```jsx
<div style={{ backgroundColor: 'rgb(0,121,191)', padding: '1rem' }}>
  <Button size='big' >
    <Text component='span' fontSize='1.6' color='white' weight={700}>Profile</Text>
  </Button>
</div>
```

Big sized button with icon:

```jsx
<div style={{ backgroundColor: 'rgb(0,121,191)', padding: '1rem' }}>
  <Button size='big' icon={<Icon name='home' color='white' size={2.5} />} />
</div>
```

Default sized button with icon and text:

```jsx
<div style={{ backgroundColor: 'rgb(0,121,191)', padding: '1rem' }}>
  <Button size='default' icon={<Icon name='android' left='13' color='white' />}>
    <Padding padding='0 0 0 2.3rem'>
      <Text fontSize='1.5' color='white'>dream-team</Text>
    </Padding>
  </Button>
</div>
```