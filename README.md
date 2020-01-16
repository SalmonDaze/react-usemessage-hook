## A hook for activating message bar programmatically, based on Material-ui

### Install

```
npm install react-usemessage-hook
```

### Usage

```js
import React, { useEffect } from "react";
import useMessage from "react-usemessage-hook";

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
