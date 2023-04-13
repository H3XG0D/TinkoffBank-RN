import React from 'react';

import {AuthProvider} from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App: React.FC = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </TailwindProvider>
  );
};

export default App;
