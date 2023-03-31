import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-slate-800 text-xl">
        Open up App.tsx to start working on your app
      </StyledText>
    </StyledView>
  );
}

export default withExpoSnack(App);
