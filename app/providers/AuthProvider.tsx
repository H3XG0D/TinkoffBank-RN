import React, {createContext, useMemo} from 'react';

import {addDoc, collection} from '@firebase/firestore';
import {User, onAuthStateChanged} from 'firebase/auth';
import {auth, login, logout, register} from '../firebase';
import {db} from '../firebase';

interface IContext {
  user: User | null;
  isLoading: boolean;

  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface IProvider {
  children?: React.ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: React.FC<IProvider> = ({children}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const registerHander = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user} = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      console.log('Error registration: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user} = await login(email, password);
    } catch (error: any) {
      console.log('Error login: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      console.log('Error logout: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    [],
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      register: registerHander,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, isLoading],
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
