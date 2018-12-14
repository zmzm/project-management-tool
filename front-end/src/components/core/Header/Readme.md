Empty header

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf' }}>
  <Header>
    <Text component='span' fontSize='1.6' color='white' weight={700}>Place your items here</Text>
  </Header>
</div>
```

Header with items

```jsx
<div style={{ padding: '1rem', color: '#17394d', backgroundColor: '#0079bf' }}>
  <Header>
    <Margin margin='0 0.4rem 0 0'>
      <Button size='big' icon={<Icon name='home' color='white' size={2.5} />} />
    </Margin>
    <Margin margin='0 0.4rem 0 0'>
      <Button size='big'>
        <Text component='span' fontSize='1.6' color='white' weight={700}>Boards</Text>
      </Button>
    </Margin>
    <Button size='big'>
      <Text component='span' fontSize='1.6' color='white' weight={700}>Profile</Text>
    </Button>
  </Header>
</div>
```