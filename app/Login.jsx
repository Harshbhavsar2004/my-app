import React, { useState } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Card } from '~/components/ui/card';
import { Mail, Eye, EyeOff, Lock } from 'lucide-react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password || !department) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }

    const formData = {
      email,
      password,
      department,
    };

    console.log('Form Data:', formData);

    try {
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response:', result);

      if (response.ok) {
        Alert.alert('Success', 'Signed up successfully!');
      } else {
        Alert.alert('Error', result.message || 'Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again.');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="flex-1 justify-center items-center p-4 bg-secondary">
          <Image
            className="rounded-lg"
            source={require("../assets/images/image-removebg-preview.png")}
            resizeMode="cover"
            style={{ width: 150, height: 150, alignSelf: 'center' }}
          />

          <View className="mb-6">
            <Text className="text-xl font-medium text-primary text-center">
              Welcome To The SVKMIOT {"\n"}
              <Text className="text-primary font-bold">Attendance App!</Text>
            </Text>
          </View>

          {/* Email Input */}
          <View className="relative w-full mb-4">
            <Mail style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={{ paddingLeft: 40, paddingRight: 10, height: 40 }}
            />
          </View>

          {/* Password Input */}
          <View className="relative w-full mb-4">
            <Lock style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              style={{ paddingLeft: 40, paddingRight: 40, height: 40 }}
            />
            {passwordVisible ? (
              <EyeOff style={{ position: 'absolute', right: 10, top: 8, zIndex: 1, color: 'black' }} onPress={() => setPasswordVisible(false)} />
            ) : (
              <Eye style={{ position: 'absolute', right: 10, top: 8, zIndex: 1, color: 'black' }} onPress={() => setPasswordVisible(true)} />
            )}
          </View>

          {/* Department Picker */}
          <Card className="w-full mb-4">
            <Picker
              selectedValue={department}
              onValueChange={(itemValue) => setDepartment(itemValue)}
              style={{ width: '100%', marginBottom: 12 }}
            >
              <Picker.Item label="Select Department" value="" />
              <Picker.Item label="Computer Science & Engineering" value="cse" />
              <Picker.Item label="Information Technology" value="it" />
              <Picker.Item label="Electronics & Communication Engineering" value="ece" />
              <Picker.Item label="Mechanical Engineering" value="me" />
              <Picker.Item label="Civil Engineering" value="ce" />
              <Picker.Item label="Master of Computer Applications" value="mca" />
              <Picker.Item label="First Year Engineering" value="fy" />

            </Picker>
          </Card>

          {/* Signup Button */}
          <Button onPress={handleSignUp} className="bg-blue-600 p-3 w-full rounded-md mb-5">
            <Text className="text-white text-xl font-bold">Login</Text>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
