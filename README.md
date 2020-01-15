## A hook for activing message bar functionally, based on Material-ui

### Install

```
npm install react-usemessage-hook
```

### Usage

```js
import React, { useEffect } from "react";

function App() {
  const msg = useMessage();
  useEffect(() => {
    msg({
      type: "success", // success | warning | error | info
      msg: "Hello World",
      duration: "6000" // ms
    });
  }, []);
  return <></>;
}
```
