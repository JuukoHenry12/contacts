import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomerButton';
import {LOGIN} from '../../constants/RouteName';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const index = ({errors, form, onChange, onSubmit}) => {
  const navigate = useNavigation();
  return (
    <Container>
      <View>
        <Text style={styles.subtitle}>create free account</Text>
      </View>
      <View>
        <Input
          label="userName"
          iconPosition="right"
          placeholder="Enter username"
          error={errors.username}
          onChangeText={value => {
            onChange({name: 'username', value});
          }}
        />
        <Input
          label="first Name"
          iconPosition="right"
          placeholder="Enter first name"
          error={errors.firstname}
          onChangeText={value => {
            onChange({name: 'firstname', value});
          }}
        />
        <Input
          label="surname"
          iconPosition="right"
          placeholder="Enter last name"
          error={errors.lastname}
          onChangeText={value => {
            onChange({name: 'lastname', value});
          }}
        />
        <Input
          label="email"
          iconPosition="right"
          placeholder="Enter email"
          error={errors.email}
          onChangeText={value => {
            onChange({name: 'email', value});
          }}
        />
        <Input
          label="Password"
          iconPosition="right"
          placeholder="Enter password"
          secureTextEntry={true}
          icon={<Text>show</Text>}
          error={errors.password}
          onChangeText={value => {
            onChange({name: 'password', value});
          }}
        />
      </View>
      <CustomButton
        disabled={loading}
        onPress={onSubmit}
        loading={loading}
        primary
        title="Register"
      />
      <View style={styles.createSection}>
        <Text>Already have an account</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(LOGIN);
          }}>
          <Text style={styles.linkBtn}>Login </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default index;
