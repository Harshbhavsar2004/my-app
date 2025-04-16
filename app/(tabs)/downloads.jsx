import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'; // Using Rapi UI for Select
import Feather from '@expo/vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Downloads() {
  const [year, setYear] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleDownload = () => {
    if (!year || !fromDate || !toDate) {
      Alert.alert('Missing Info', 'Please select Year, From Date, and To Date before downloading.');
      return;
    }

    // Replace this with your real file generation logic!
    Alert.alert('Download Started', `Generating attendance report for:\nYear: ${year}\nFrom: ${fromDate.toLocaleDateString()}\nTo: ${toDate.toLocaleDateString()}`);
  };

  const handleFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setFromDate(currentDate);
  };

  const handleToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setToDate(currentDate);
  };
  const insets = useSafeAreaInsets();
  const contentInsets = {
      top: insets.top,
      bottom: insets.bottom,
      left: 12,
      right: 12,
  };
  return (
    <View className="flex-1 p-5 bg-white">
      <Text className="font-bold text-lg mb-4 text-primary">Download Attendance Report</Text>

      {/* Year Select */}
      <Text className="font-semibold mb-1 text-primary">Select Year:</Text>
      <Select selectedValue={year} onValueChange={(val) => setYear(val)} className="mb-4">
        <SelectTrigger className="w-full p-2 border border-gray-400 rounded">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent className="w-full" insets={contentInsets}>
          <SelectItem label="First Year" value="First Year" />
          <SelectItem label="Second Year" value="Second Year" />
          <SelectItem label="Third Year" value="Third Year" />
        </SelectContent>
      </Select>

      {/* From Date Picker */}
      <Text className="font-semibold mt-4 mb-1 text-primary">From Date:</Text>
      <DateTimePicker
        value={fromDate}
        mode="date"
        display="default"
        onChange={handleFromDateChange}
      />

      {/* To Date Picker */}
      <Text className="font-semibold mt-4 mb-1 text-primary">To Date:</Text>
      <DateTimePicker
        value={toDate}
        mode="date"
        display="default"
        onChange={handleToDateChange}
      />

      {/* Download Button */}
      <TouchableOpacity
        onPress={handleDownload}
        className="mt-8 bg-blue-600 px-4 py-3 rounded-lg flex-row justify-center items-center"
      >
        <Feather name="download" size={24} color="white" />
        <Text className="text-white font-semibold text-lg ml-2">Download Excel</Text>
      </TouchableOpacity>
    </View>
  );
}
