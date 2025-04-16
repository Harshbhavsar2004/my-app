import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Share, Alert } from 'react-native';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import Entypo from '@expo/vector-icons/Entypo';

const ShareComponent = () => {

    const subject = 'Data Structures';
    const time = '10:00 AM - 11:30 AM';
    const absentees = [
        '23', '27', '35', '42', '45', '50', '51', '52', '55', '56', '57', '60', '61', '62'
    ];  // Sample long list

    const handleShare = async () => {
        try {
            const message = `Lecture: ${subject}\nTime: ${time}\nAbsent Students: ${absentees.join(', ') || 'None'}`;
            await Share.share({ message });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    };

    const handleDelete = () => {
        Alert.alert(
            'Delete Summary',
            'Are you sure you want to delete this record?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => console.log('Deleted!') }
            ]
        );
    };

    return (
        <ScrollView className="flex-1 bg-secondary">
            <Card className="m-5">
                <CardHeader>
                    <CardTitle>Lecture Summary</CardTitle>
                    <CardDescription>Subject: {subject}</CardDescription>
                </CardHeader>

                <CardContent>
                    <Text className="font-semibold text-lg mb-2 text-primary">Time: {time}</Text>
                    <Text className="font-semibold text-base mb-2 text-primary">Absent Students:</Text>

                    {absentees.length > 0 ? (
                        <View className="flex-row flex-wrap">
                            {absentees.map((roll, index) => (
                                <Text
                                    key={index}
                                    className="text-green-500 mr-3 mb-2"
                                >
                                    {roll}
                                </Text>
                            ))}
                        </View>
                    ) : (
                        <Text className="text-green-600">No absentees 🎉</Text>
                    )}
                </CardContent>

                <CardFooter className="flex-row justify-between items-center">
                    <TouchableOpacity
                        onPress={handleDelete}
                        className="bg-red-600 px-4 py-2 rounded-lg flex-row items-center"
                    >
                        <Entypo name="trash" size={20} color="white" />
                        <Text className="text-white font-semibold text-lg ml-2">Delete</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleShare}
                        className="bg-blue-600 px-4 py-2 rounded-lg flex-row items-center"
                    >
                        <Entypo name="share-alternative" size={20} color="white" />
                        <Text className="text-white font-semibold text-lg ml-2">Share</Text>
                    </TouchableOpacity>
                </CardFooter>
            </Card>
        </ScrollView>
    );
};

export default ShareComponent;
