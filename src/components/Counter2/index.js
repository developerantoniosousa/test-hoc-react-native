import React from 'react';
import { Button, Text } from 'react-native';

import withCounter from '../../hoc/withCounter';

function Counter2({ title, count, increment }) {
  return (
    <>
      <Button title={title} onPress={increment} />
      <Text style={{ textAlign: 'center' }}>{count}</Text>
    </>
  );
}

export default withCounter(Counter2);
