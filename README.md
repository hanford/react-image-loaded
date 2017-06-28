## react-image-loaded

> Add a smooth animation to images once they're loaded

<!-- <br /> -->

<!-- [Live demo!](https://build-sjqytwwjxj.now.sh) -->

## Install

```
$ npm i react-image-loaded --save
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
      url='http://via.placeholder.com/200x200'
    />
  )
}
```

## License

MIT © [Jack Hanford](http://jackhanford.com)
