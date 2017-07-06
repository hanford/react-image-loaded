## react-image-loaded

> Add a smooth animation to images once they're loaded

<!-- <br /> -->

<!-- [Live demo!](https://build-sjqytwwjxj.now.sh) -->

## Install

```
/* ReactJS */
$ npm i react-image-loaded react-motion --save

/* PreactJS */
$ npm i react-image-loaded preact-motion --save
```


## Usage

```js
import ImageLoader from 'react-image-loaded'

..

render () {
  const { open } = this.state

  return (
    <ImageLoader
      className={style.image}
      opacity={true}
      url='http://via.placeholder.com/200x200'
    />
  )
}
```

## License

MIT © [Jack Hanford](http://jackhanford.com)
