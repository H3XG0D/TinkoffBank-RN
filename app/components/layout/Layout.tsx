import React from 'react';
import {View, ScrollView} from 'react-native';

import {useTailwind} from 'tailwind-rn';

interface ILayout {
  children: React.ReactNode;
  isScrollView?: boolean;
}

export const tailwind = useTailwind();
export const styleCenter = tailwind('h-full w-full bg-white pt-16');

const Layout: React.FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={styleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

export default Layout;
