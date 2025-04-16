import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const sampleTimetable = {
  '9-10': ['Math', 'Chemistry', 'English', 'Math', 'Chemistry', 'English'],
  '10-11': ['Physics', 'Math', 'Physics', 'Break', 'Math', 'Physics'],
  '11-12': ['Data Structures', 'Break', 'Data Structures', 'English', 'Break', 'Seminar'],
  '12-1': ['Break', 'Electronics', 'Break', 'Electronics', 'Operating Systems', 'Break'],
  '1-2': ['English', 'Data Structures', 'Operating Systems', 'Data Structures', 'Free', 'Data Structures'],
  '2-3': ['Operating Systems', 'PE', 'Free', 'Physics', 'PE', 'Library'],
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Timetable() {
  return (
    <ScrollView className="p-4 bg-secondary">
      <ScrollView horizontal>
        <View>
          {/* Header Row */}
          <View className="flex-row border-b border-gray-400">
            <View className="w-24 h-12 border-r border-gray-400 items-center justify-center bg-gray-200">
              <Text className="font-bold">Time</Text>
            </View>
            {days.map((day, index) => (
              <View key={index} className="w-24 h-12 border-r border-gray-400 items-center justify-center bg-gray-200">
                <Text className="font-bold">{day}</Text>
              </View>
            ))}
          </View>

          {/* Table Rows */}
          {Object.entries(sampleTimetable).map(([time, subjects], index) => (
            <View key={index} className="flex-row border-b border-gray-300">
              <View className="w-24 h-12 border-r border-gray-300 items-center justify-center bg-gray-100">
                <Text className="font-semibold">{time}</Text>
              </View>
              {subjects.map((subject, i) => (
                <View key={i} className="w-24 h-12 border-r border-gray-300 items-center justify-center">
                  <Text className="text-sm text-center text-primary">{subject}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Info Message */}
      <View className="mt-6 px-3 py-4 bg-blue-100 rounded-lg">
        <Text className="text-blue-800 font-semibold text-center">
          Want to create your own or modify this timetable?
        </Text>
        <Text className="text-blue-700 text-center mt-1">
          Login from the Faculty Website and update your timetable.
        </Text>
      </View>
    </ScrollView>
  );
}
