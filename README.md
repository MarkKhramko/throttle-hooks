# throttle-hooks for React

[![NPM version](https://img.shields.io/npm/v/throttle-hooks)](https://www.npmjs.com/package/throttle-hooks)
[![License](https://img.shields.io/npm/l/throttle-hooks)](https://www.npmjs.com/package/throttle-hooks)

* [Installation](#installation)
* [Usage](#usage)
  + [Throttling](#throttling)
  + [Debouncing](#debouncing)
* [Further reading](#further-reading)
* [License](#license)

## Installation

`npm i throttle-hooks`

## Usage

Package contains 2 hooks: 
* `useThrottle`
* `useDebounce`

### Throttling

`useThrottle()` accepts 3 optional arguments:
* wait - number in miliseconds. Default is `400`
* leading - boolean. Default is `false`
* trailing - boolean. Default is `false`

`useThrottle(wait, leading, trailing)` returns function setter, which you can use anywhere in your component.
```js
import { useThrottle } from 'throttle-hooks';

const throttle = useThrottle(400, true, false);

// With arrow function
throttle(() => {
  // Express yourself...
});

// Or by invoking named function
throttle(expressYourself);
// You can also submit custom scope and arguments
throttle(expressYourself, scope, args);
```

You can use as many `useThrottle` hooks as you like. Each hook is independent.

#### Component example:
```js
import { useState } from 'react';
import { useThrottle } from 'throttle-hooks';

export default function SomePage() {
  const [numClicks, setNumClicks] = useState(0);
  const throttle = useThrottle(1000);

  const handleClick = () => {
    const updatedClicks = numClicks + 1;
    setNumClicks(updatedClicks);

    throttle(() => {
      console.log('Recevied:', updatedClicks, 'clicks');
    });
  }

  return (
    <div>
      <h1>Hello!</h1>
      <p>You clicked: { numClicks } times.</p>
      <button onClick={ handleClick }>
        Click
      </button>
    </div>
  )
}
```

### Debouncing
`useDebounce()` accepts 2 optional arguments:
* wait - number in miliseconds. Default is `400`
* leading - boolean. Default is `false`

`useDebounce(wait, leading)` returns function setter, which you can use anywhere in your component.
```js
import { useDebounce } from 'throttle-hooks';

const debounce = useDebounce(400, true);

// With arrow function
debounce(() => {
  // Express yourself...
});

// Or by invoking named function
debounce(expressYourself);
// You can also submit custom scope and arguments
debounce(expressYourself, scope, args);
```

You can use as many `useDebounce` hooks as you like. Each hook is independent.

#### Component example:
```js
import { useState } from 'react';
import { useDebounce } from 'throttle-hooks';

export default function SomePage() {
  const [numClicks, setNumClicks] = useState(0);
  const debounce = useDebounce(1000);

  const handleClick = () => {
    const updatedClicks = numClicks + 1;
    setNumClicks(updatedClicks);

    debounce(() => {
      console.log('Recevied:', updatedClicks, 'clicks');
    });
  }

  return (
    <div>
      <h1>Hello!</h1>
      <p>You clicked: { numClicks } times.</p>
      <button onClick={ handleClick }>
        Click
      </button>
    </div>
  )
}
```

## Further reading

* [Difference between throttle and debounce](https://css-tricks.com/debouncing-throttling-explained-examples/)
* [Debounce from the term author](http://unscriptable.com/2009/03/20/debouncing-javascript-methods/)


## License
[MIT](LICENSE)

## Copyright
Copyright 2021-present [Mark Khramko](https://github.com/MarkKhramko)
