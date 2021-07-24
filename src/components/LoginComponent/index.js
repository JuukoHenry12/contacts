import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomerButton';
import {REGISTER} from '../../constants/RouteName';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const index = ({error, form, justSignedUp, onChange, loading, onSubmit}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoimage}
      />
      <View>
        <Text style={styles.title}>Welcome to the contacts</Text>
        <Text style={styles.subtitle}>login please</Text>
      </View>
      <View>
        <Input
          label="UserName"
          iconPosition="right"
          placeholder="Enter username"

          onChangeText={(text)=>{
            onChange({name:'username',value})
          }}
        />
        <Input
          label="Password"
          iconPosition="right"
          placeholder="Enter password"
          secureTextEntry={true}
          iconPosition="right"
         
          onChangeText={(text)=>{
            onChange({name:'password',value})
          }}
        />
      </View>
      <CustomButton
        disabled={loading}
        onPress={onSubmit}
        loading={loading}
        primary
        title="Submit"
      />
      <View style={styles.createSection}>
        <Text>create account</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(REGISTER);
          }}>
          <Text style={styles.linkBtn}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default index;
