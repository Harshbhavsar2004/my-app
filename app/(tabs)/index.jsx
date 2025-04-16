import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Clock, Calendar, BookOpen } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import PagerView from 'react-native-pager-view';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from 'expo-router';
const timeSlots = [
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 1:00',
    '1:00 - 2:00',
    '2:00 - 3:00',
    '3:00 - 4:00',
    '4:00 - 5:00',
];

const yearOptions = ['Second Year', 'Third Year', 'Fourth Year'];

const subjectsByYear = {
    'Second Year': ['Mathematics II', 'Physics', 'Data Structures'],
    'Third Year': ['Operating Systems', 'Computer Networks', 'Database Management'],
    'Fourth Year': ['Artificial Intelligence', 'Machine Learning', 'Cloud Computing'],
};

const upcomingLectures = [
    {
        subject: 'Internet of Things (IoT)',
        date: 'April 18, 2025',
        time: '10:00 AM - 11:30 AM',
    },
    {
        subject: 'Machine Learning',
        date: 'April 19, 2025',
        time: '12:00 PM - 1:30 PM',
    },
    {
        subject: 'Database Systems',
        date: 'April 20, 2025',
        time: '2:00 PM - 3:30 PM',
    },
];

const HomePage = () => {
    const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
    const [selectedYear, setSelectedYear] = useState(yearOptions[0]);
    const [selectedSubject, setSelectedSubject] = useState(subjectsByYear[selectedYear][0]);
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const contentInsets = {
        top: insets.top,
        bottom: insets.bottom,
        left: 12,
        right: 12,
    };

    const pagerRef = useRef(null);

    useEffect(() => {
        let currentPage = 0;
        const totalPages = upcomingLectures.length;

        const interval = setInterval(() => {
            currentPage = (currentPage + 1) % totalPages;
            pagerRef.current?.setPage(currentPage);  // ← Move to the next page
        }, 2000); // Change page every 2 seconds

        return () => clearInterval(interval);  // Cleanup on unmount
    }, []);

    return (
        <View className="flex-1 p-4 bg-secondary">
                   <View className="mb-10" style={{ height: 200 }}>
            <PagerView
                ref={pagerRef}
                style={{ flex: 1 }}
                initialPage={0}
            >
                {upcomingLectures.map((lecture, index) => (
                    <View key={index} className="px-2">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>Upcoming Lecture</CardTitle>
                                <CardDescription>
                                    Don’t miss the next session — stay prepared!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-xl">
                                <View className="flex-row items-center mb-2">
                                    <Entypo name="book" size={20} color="#4A90E2" />
                                    <Text className="font-semibold text-lg ml-2 text-primary">Subject: {lecture.subject}</Text>
                                </View>

                                <View className="flex-row items-center mb-2">
                                    <Feather name="calendar" size={20} color="#4A90E2" />
                                    <Text className="font-semibold text-lg ml-2 text-primary">Date: {lecture.date}</Text>
                                </View>

                                <View className="flex-row items-center">
                                    <Feather name="clock" size={20} color="#4A90E2" />
                                    <Text className="font-semibold text-lg ml-2 text-primary">Time: {lecture.time}</Text>
                                </View>
                            </CardContent>
                        </Card>
                    </View>
                ))}
            </PagerView>
        </View>



            {/* Time Slot Selection */}
            <View className="mb-4">
                <View className="flex-row items-center mb-2">
                    <Clock size={20} color="black" style={{ marginRight: 5 }} />
                    <Text className="text-lg font-semibold ml-2 text-primary">Select Time Slot</Text>
                </View>
                <Card>
                    <Select defaultValue={{ value: selectedTime, label: selectedTime }} onValueChange={(val) => setSelectedTime(val.value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue className="text-foreground text-sm native:text-lg" placeholder="Select Time Slot" />
                        </SelectTrigger>
                        <SelectContent insets={contentInsets} className="w-full">
                            <SelectGroup>
                                <SelectLabel>Time Slots</SelectLabel>
                                {timeSlots.map((slot, index) => (
                                    <SelectItem key={index} label={slot} value={slot}>
                                        {slot}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Card>
            </View>

            {/* Year Selection */}
            <View className="mb-4">
                <View className="flex-row items-center mb-2">
                    <Calendar size={20} color="black" style={{ marginRight: 5 }} />
                    <Text className="text-lg font-semibold ml-2 text-primary">Select Year</Text>
                </View>
                <Card>
                    <Select defaultValue={{ value: selectedYear, label: selectedYear }} onValueChange={(val) => {
                        setSelectedYear(val.value);
                        setSelectedSubject(subjectsByYear[val.value][0]);
                    }}>
                        <SelectTrigger className="w-full">
                            <SelectValue className="text-foreground text-sm native:text-lg" placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent insets={contentInsets} className="w-full">
                            <SelectGroup>
                                <SelectLabel>Years</SelectLabel>
                                {yearOptions.map((year, index) => (
                                    <SelectItem key={index} label={year} value={year}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Card>
            </View>

            {/* Subject Selection */}
            <View className="mb-4">
                <View className="flex-row items-center mb-2">
                    <BookOpen size={20} color="black" style={{ marginRight: 5 }} />
                    <Text className="text-lg font-semibold ml-2 text-primary">Select Subject</Text>
                </View>
                <Card>
                    <Select defaultValue={{ value: selectedSubject, label: selectedSubject }} onValueChange={(val) => setSelectedSubject(val.value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue className="text-foreground text-sm native:text-lg" placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent insets={contentInsets} className="w-full">
                            <SelectGroup>
                                <SelectLabel>Subjects</SelectLabel>
                                {subjectsByYear[selectedYear].map((subject, index) => (
                                    <SelectItem key={index} label={subject} value={subject}>
                                        {subject}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Card>
            </View>

            {/* Mark Attendance Button */}
            <TouchableOpacity
                className="bg-blue-600 p-3 mt-6 rounded-lg"
                onPress={() => navigation.navigate('Attendance')}
            >
                <Text className="text-white text-center text-lg font-semibold">Mark Attendance</Text>
            </TouchableOpacity>

        </View>
    );
};

export default HomePage;
