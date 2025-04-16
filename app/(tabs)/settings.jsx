import React, { useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { ChevronRight, KeyRound, LogOut, MessageSquareWarning, User } from 'lucide-react-native';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function SettingsPage() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const profileSheetRef = useRef(null);
  const passwordSheetRef = useRef(null);
  const reportSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['30%', '100%', '50%'], []);

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutDialog(false);
    // Add your actual logout logic here
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-secondary p-5">

        {/* Profile */}
        <View className="flex-row items-center mb-8">
          <Avatar size="lg">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback><Text className="text-primary">JD</Text></AvatarFallback>
          </Avatar>
          <View className="ml-4">
            <Text className="text-lg font-bold text-primary">John Doe</Text>
            <Text className="text-primary">john.doe@example.com</Text>
          </View>
        </View>

        {/* Settings Options */}
        <TouchableOpacity
          className="flex-row justify-between items-center py-4 border-b border-gray-300"
          onPress={() => profileSheetRef.current?.expand()}
        >
          <View className="flex-row items-center space-x-2">
            <User size={20} />
            <Text className="text-base text-primary ml-2">Profile</Text>
          </View>
          <ChevronRight size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-between items-center py-4 border-b border-gray-300"
          onPress={() => passwordSheetRef.current?.expand()}
        >
          <View className="flex-row items-center space-x-2">
            <KeyRound size={20} />
            <Text className="text-base text-primary ml-2">Change Password</Text>
          </View>
          <ChevronRight size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-between items-center py-4 border-b border-gray-300"
          onPress={() => reportSheetRef.current?.expand()}
        >
          <View className="flex-row items-center space-x-2">
            <MessageSquareWarning size={20} />
            <Text className="text-base text-primary ml-2">Report an Issue</Text>
          </View>
          <ChevronRight size={20} />
        </TouchableOpacity>

        {/* Logout Button with Dialog */}
        <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
          <DialogTrigger asChild>
            <TouchableOpacity className="flex-row items-center justify-center bg-red-600 rounded-lg p-4 mt-8">
              <LogOut size={20} color="#fff" />
              <Text className="text-white text-base ml-2">Logout</Text>
            </TouchableOpacity>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure you want to logout?</DialogTitle>
              <DialogDescription>
                You will need to sign in again to access your account.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" onPress={() => setShowLogoutDialog(false)}>
                  <Text className="text-primary">Cancel</Text>
                </Button>
              </DialogClose>
              <Button variant="destructive" onPress={handleLogout}>
                <Text className="text-primary">Logout</Text>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Profile Bottom Sheet */}
        <BottomSheet ref={profileSheetRef} index={-1} snapPoints={snapPoints}>
          <BottomSheetView style={{ padding: 16 }}>
            <Text className="text-lg font-bold text-primary">Profile</Text>
            <Text className="text-primary mt-2">Here you can edit your profile details.</Text>
          </BottomSheetView>
        </BottomSheet>

        {/* Profile Bottom Sheet */}
        <BottomSheet
          ref={profileSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}  // <-- make sure this is set or just omit (default is true)
        >

          <BottomSheetView style={{ padding: 16 }}>
            <Text className="text-lg font-bold text-primary">Profile</Text>
            <Text className="text-primary mt-2">Here you can edit your profile details.</Text>
          </BottomSheetView>
        </BottomSheet>

        {/* Change Password Bottom Sheet */}
        <BottomSheet ref={passwordSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true}>
          <BottomSheetView style={{ padding: 16 }}>
            <Text className="text-lg font-bold text-primary">Change Password</Text>
            <Text className="text-primary mt-2">Here you can change your account password.</Text>
          </BottomSheetView>
        </BottomSheet>

        {/* Report an Issue Bottom Sheet */}
        <BottomSheet ref={reportSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true}>
          <BottomSheetView style={{ padding: 16 }}>
            <Text className="text-lg font-bold text-primary">Report an Issue</Text>
            <Text className="text-primary mt-2">Tell us what's wrong or give feedback!</Text>
          </BottomSheetView>
        </BottomSheet>

      </View>
    </GestureHandlerRootView>
  );
}
