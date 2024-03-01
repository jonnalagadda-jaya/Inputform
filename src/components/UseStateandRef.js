import React, { useRef, useState } from 'react';

function Counter() {
  // A state that causes re-render
  const [renderCount, setRenderCount] = useState(0);

  // A mutable value that does not cause re-render
  const count = useRef(0);

  const incrementWithoutRender = () => {
    count.current = count.current + 1;
  };

  const incrementAndRender = () => {
    setRenderCount(prevRenderCount => prevRenderCount + 1);
  };

  return (
    <>
      <p>Render Count: {renderCount}</p>
      <p>Non-Rendering Count: {count.current}</p>
      <button onClick={incrementWithoutRender}>Increment Without Render</button>
      <button onClick={incrementAndRender}>Increment And Render</button>
    </>
  );
}
export default Counter;