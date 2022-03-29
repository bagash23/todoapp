import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions  } from 'react-native'
import {UseForm, storeData} from '../../utils';
import {useDispatch} from 'react-redux';
import ApiTodo from '../../config/api'
import Inputan from '../../components/atom/Inputan';
import axios from 'axios';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const masuk = async () => {
    dispatch({type: 'SET_LOADING', value: true});
    let uri = "http://94.74.86.174:8080/api/login";
    try {
      await axios.post(uri, user, {
        headers: {
          'Content-Type' : 'application/json',
          // "Content-Type":"application/x-www-form-urlencoded"
        },
      }).then(res => {
        console.log(res.data);
        dispatch({type: 'SET_LOADING', value: false});
        setUser(res.data);
        storeData('TOKEN', {
          value: res.data,
        });
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      });
    } catch (error) {
      console.log(error, JSON.stringify(error));
      dispatch({type: 'SET_LOADING', value: false});
    }
  };

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      padding: Dimensions.get('window').width * 0.1,
    }} >
      <Text style = {{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      }} >Login</Text>
      <Inputan
        label="Username"
        value={user.username}
        onChangeText={value => setUser({...user, username: value})}
      />
      <Inputan
        label="Password"
        value={user.password}
        onChangeText={value => setUser({...user, password: value})}
        secureTextEntry
      />
      <View style = {{
        marginTop: Dimensions.get('window').width * 0.1,
      }}  >
        <Button
          title="Login"
          onPress={() => {
            masuk();
          }}
        />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})