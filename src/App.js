import React from 'react';
import './style.css';
import { memoize } from './memoize';
import { usePrevious } from './usePrevious';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [secondCount, setSecondCount] = React.useState(0);
  const onClick = () => {
    setCount((v) => v + 1);
  };
  const onSecondClick = () => {
    setSecondCount((v) => v + 1);
  };
  const func = React.useCallback(
    memoize(() => []),
    [count]
  );
  const pre = usePrevious(func());
  const cur = func();
  console.log(pre === cur);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={onClick}>click</button>
      <button onClick={onSecondClick}>click2</button>
    </div>
  );
}
