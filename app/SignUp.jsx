import React, { useState } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '~/components/ui/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '~/components/ui/input';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Mail, User, Lock } from 'lucide-react-native';
import { Card } from '~/components/ui/card'
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('');


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View className="flex-1 justify-center items-center p-4 bg-secondary">
                    <View className="relative w-full mb-4">
                        <User style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
                        <Input
                            placeholder="Full Name"
                            value={name}
                            onChangeText={setName}
                            aria-labelledby="nameLabel"
                            aria-errormessage="nameError"
                            style={{ paddingLeft: 40, paddingRight: 10, height: 40 }}
                        />
                    </View>
                    <View className="relative w-full mb-4">
                        <Mail style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
                        <Input
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={{ paddingLeft: 40, paddingRight: 10, height: 40 }}
                        />
                    </View>
                    <View className="relative w-full mb-4">
                        <Lock style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
                        <Input
                            placeholder="Password"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            aria-labelledby="passwordLabel"
                            aria-errormessage="passwordError"
                            style={{ paddingLeft: 40, paddingRight: 10, height: 40 }}
                        />
                    </View>
                    <View className="relative w-full mb-4">
                        <Lock style={{ position: 'absolute', left: 10, top: 8, zIndex: 1, color: 'black' }} />
                        <Input
                            placeholder="Conform Password"
                            value={password}
                            secureTextEntry
                            onChangeText={setPassword}
                            aria-labelledby="passwordLabel"
                            aria-errormessage="passwordError"
                            style={{ paddingLeft: 40, paddingRight: 10, height: 40 }}
                        />
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

                    {/* SignUp Button */}
                    <Button title="Sign Up" onPress={() => alert('Signed Up!')} className="bg-blue-600 p-3 w-full rounded-md mb-5">
                        <Text className="text-white font-bold text-xl">Sign Up</Text>
                    </Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;