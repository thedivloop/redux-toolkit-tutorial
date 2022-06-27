# Redux-toolkit-tutorial

This is a tutorial exercise to learn redux

## Installation

```
$ npx create-react-app@5.0.1 redux-toolkit-tutorial
$ cd redux-toolkit-tutorial
$ npm install @reduxjs/toolkit react-redux
```

Delete all files in <kbd>src</kbd> except `App.js`, `index.css` and `index.js`.

## Coding

create `store.js` in app in src

```js
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
});
```

Import it in `index.js`.

Import the Provider and wrap App with it

```jsx
<Provider store={store}>
  <App />
</Provider>
```

create `counterSlice.js` in src/features/counter

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

Then import in `store.js` and add to reducer:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Create `Counter.js` in features/counter:

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
```

Import `store` and `Provider` in `index.js`.

```jsx
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Credits

https://www.youtube.com/watch?v=u3KlatzB7GM
