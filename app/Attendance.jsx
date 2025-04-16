import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";

// Dummy data for the lecture details
const lectureDetails = {
  time: "10:00 AM - 11:00 AM",
  date: new Date().toDateString(),
  subject: "Mathematics",
  totalStudents: 69,
};

// Generate 69 students dynamically
const students = Array.from({ length: 69 }, (_, i) => ({
  rollNumber: (i + 1).toString().padStart(3, "0"), // "001", "002", ...
  name: `Student ${i + 1}`,
}));

// Chunk the array into groups of 4
const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const Attendance = () => {
  // Default state: All students are "Present"
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => ({ ...acc, [student.rollNumber]: "Present" }), {})
  );

  const toggleAttendance = (rollNumber) => {
    setAttendance((prev) => ({
      ...prev,
      [rollNumber]: prev[rollNumber] === "Absent" ? "Present" : "Absent",
    }));
  };

  const handleSubmit = () => {
    const absentStudents = Object.entries(attendance)
      .filter(([_, status]) => status === "Absent")
      .map(([rollNumber]) => rollNumber);

    const attendanceData = {
      lectureDetails,
      absentStudents,
    };

    console.log("Attendance Submitted:", attendanceData);
    Alert.alert("Attendance Submitted", `Absent Students: ${absentStudents.length}`);
  };

  const studentRows = chunkArray(students, 4);

  return (
    <View className="flex-1 p-4 bg-secondary">
      {/* Lecture Details */}
      <View className="mb-4 p-4 bg-primary rounded-lg">
        <Text className="text-secondary text-lg font-semibold">Subject : {lectureDetails.subject}</Text>
      </View>

      <Text className="text-xl font-semibold text-primary text-center mb-4">
        Mark Absent Students
      </Text>

      {/* Attendance Grid */}
      <FlatList
        data={studentRows}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="flex-row justify-around mb-4">
            {item.map((student) => (
              <TouchableOpacity
                key={student.rollNumber}
                className={`p-2 w-20 h-20 rounded-full justify-center items-center ${
                  attendance[student.rollNumber] === "Absent"
                    ? "bg-red-500"
                    : "bg-primary"
                }`}
                onPress={() => toggleAttendance(student.rollNumber)}
              >
                <Text className="text-secondary font-bold">
                  {student.rollNumber}
                </Text>
                <Text className="text-secondary text-xs">
                  {attendance[student.rollNumber]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded-lg mt-4 items-center"
        onPress={handleSubmit}
      >
        <Text className="text-white text-lg font-bold">Submit Attendance</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Attendance;
