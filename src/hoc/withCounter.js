import React, { useState, useCallback } from 'react';

export default (WrappedComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
      setCount(count + 1);
    }, [count]);

    return <WrappedComponent {...props} count={count} increment={increment} />;
  }

  return NewComponent;
};
