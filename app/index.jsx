import * as React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Text } from '~/components/ui/text';

export default function Screen() {
  const router = useRouter();
  const [isVerified, setIsVerified] = React.useState(true); // null for loading state

  // Simulating an API check for user verification
  React.useEffect(() => {
    setTimeout(() => {
      if (isVerified) {
        router.replace('(tabs)');
      } else {
        router.replace('Login');
      }
    }, 2000); // Simulate delay for verification check
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-secondary/30 p-6">
      {/* College Logo */}
      <Image
        source={require('../assets/images/image-removebg-preview.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
        resizeMode="contain"
      />

      {/* Verification Status Text */}
      <Text className="text-lg font-semibold text-primary text-center">
        Pursuing Excellence
      </Text>
    </View>
  );
}
