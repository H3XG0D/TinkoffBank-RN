import {View, Text} from 'react-native';
import React from 'react';

import {styleCenter, tailwind} from '../../layout/Layout';
import {useAuth} from '../../../hooks/useAuth';
import Loader from '../../UI/Loader';
import Field from '../../UI/Field';
import Button from '../../UI/Button';

interface IData {
  email: string;
  password: string;
}

const Auth = () => {
  const {isLoading} = useAuth();

  const [isReg, setIsReg] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IData>({} as IData);

  const authHandler = () => {};

  return (
    <View style={styleCenter}>
      <View style={tailwind('mx-5 justify-center items-center h-full')}>
        <View style={tailwind('w-9/12')}>
          <Text
            style={tailwind(
              'text-center text-gray-800 text-2xl font-bold mb-2',
            )}>
            {isReg ? 'Sign up' : 'Sign in'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                val={data.email}
                placeholder="Enter email"
                onChange={val => setData({...data, email: val})}
              />

              <Field
                val={data.password}
                isSecure={true}
                placeholder="Enter password"
                onChange={val => setData({...data, password: val})}
              />

              <Button onPress={authHandler} title={`Let's go`} />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Auth;
