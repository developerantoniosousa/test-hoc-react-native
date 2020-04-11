import React from 'react';
import { View } from 'react-native';

export default function AppContainer({ children }) {
  return <View style={{ paddingTop: 50, flex: 1 }}>{children}</View>;
}
