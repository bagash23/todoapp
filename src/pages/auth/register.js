import React, { useState } from 'react'
import Inputan from '../../components/atom/Inputan';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions  } from 'react-native'
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {storeData, UseForm} from '../../utils';

const Register = ({navigation}) => {
  const [user, setUser] = useState ({
    username: '',
    password: '',
    email: '',
  })

  const {username, password, email} = user;
  console.log("WWKWKEWKE",username, password, email);

  console.log(user);

  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const dispatch = useDispatch();
  const daftar = () => {
    dispatch({type: 'SET_LOADING', value: true});
    let uri = "http://94.74.86.174:8080/api/register";
    axios
      .post(uri, user, {
        headers: {
          'Content-Type' : 'application/json',
        },
      })
      .then(res => {
        console.log(res.data);
        dispatch({type: 'SET_LOADING', value: false});
        setUser(res.data);
        storeData('TOKEN', res.data)
        navigation.replace('Login');
      })
      .catch(error => {
        console.log('GAGAL');
        dispatch({type: 'SET_LOADING', value: false});
        console.log(error)
      });
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
      }} >Register</Text>
      <Inputan
        label="Username"
        value={user.username}
        onChangeText={value => setUser({...user, username: value})}
      />
      <Inputan
        label="Email Address"
        value={user.email}
        onChangeText={value => setUser({...user, email: value})}
      />
      <View>
        <Inputan
          label="Password"
          value={user.password}
          onChangeText={value => setUser({...user, password: value})}
          secureTextEntry={isSecureEntry}
        />
        {
              <TouchableOpacity
                onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text
                style={{
                  position: 'absolute',
                  right: 10,
                  top: -36,
                  fontSize: Dimensions.get('window').width * 0.03
                }}>
              {isSecureEntry ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        }
      </View>
      <View style = {{
        marginTop: Dimensions.get('window').width * 0.1,
      }} >
        <Button
          title="Register"
          onPress={daftar}
        />
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})