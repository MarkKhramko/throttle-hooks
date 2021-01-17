# throttle-hooks for React

* [Installation](#installation)
* [Usage](#usage)
	+ [Throttling](#throttling)
	+ [Debouncing](#debouncing)
* [License](#license)

## Installation

`npm i throttle-hooks`

## Usage

Package contains 2 hooks: 
* `useThrottle`
* `useDebounce`

### Throttling

`useThrottle()` accepts 3 optional arguments:
* wait - number in miliseconds. Default is `400`.
* leading - boolean. Default is `false`;
* trailing - boolean. Default is `false`;

`useThrottle(wait, leading, trailing)`

#### Component example:
```
	import { useState, useRef } from 'react';
	import { useThrottle } from 'throttle-hooks';

	import Button from '#components/Button';


	export default function SomePage(){
		const [numClicks, setNumClicks] = useState(0);
		const throttle = useThrottle(1000);

		const _handleClick = ()=>{
			let updatedClicks = numClicks + 1;
			setNumClicks(updatedClicks);

			throttle(()=>{
				console.log("Recevied: numClicks:", updatedClicks);
			});
		}

		return (
			<div>
				<h1>Hello!</h1>
				<p>{ numClicks }</p>
				<Button onClick={_handleClick}>
					Click
				</Button>
			</div>
		)
	}
```

### Debouncing
`useDebounce()` accepts 2 optional arguments:
* wait - number in miliseconds. Default is `400`.
* leading - boolean. Default is `false`;

`useDebounce(wait, leading)`

#### Component example:
```
	import { useState, useRef } from 'react';
	import { useDebounce } from 'throttle-hooks';

	import Button from '#components/Button';


	export default function SomePage(){
		const [numClicks, setNumClicks] = useState(0);
		const debounce = useDebounce(1000);

		const _handleClick = ()=>{
			let updatedClicks = numClicks + 1;
			setNumClicks(updatedClicks);

			debounce(()=>{
				console.log("Recevied: numClicks:", updatedClicks);
			});
		}

		return (
			<div>
				<h1>Hello!</h1>
				<p>{ numClicks }</p>
				<Button onClick={_handleClick}>
					Click
				</Button>
			</div>
		)
	}
```

## License
MIT. 2021-present © Mark Khramko