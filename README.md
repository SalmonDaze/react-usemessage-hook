## A hook for activing message bar functionally

### Install
```
npm install react-usemessage-hook
```

### Usage
```
import React, { useEffect } from 'react'

function App(){
	const msg = useMessage()
		useEffect(() => {
			msg({
				type: 'success', // success | warning | error | info
				msg: 'Hello World',
				duration: '6000' // ms
				})
		},  [ ])
	return(
		<></>
	)
}
```