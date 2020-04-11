import React from 'react';

import AppContainer from './components/AppContainer';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

export default function App() {
  return (
    <AppContainer>
      <Counter1 title="Contador 1" />
      <Counter2 title="Contador 2" />
    </AppContainer>
  );
}
