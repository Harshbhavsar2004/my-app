import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { ArrowLeft, ChevronRight, KeyRound, LogOut, MessageSquareWarning, User } from 'lucide-react-native';
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

export default function SettingsPage() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutDialog(false);
    // Navigate to login or perform actual logout logic
  };

  return (
    <View style={styles.container}>
      

      {/* Profile */}
      <View style={styles.profileContainer}>
        <Avatar size="lg">
          <AvatarImage src="/placeholder.svg" alt="Profile" />
          <AvatarFallback><Text>JD</Text></AvatarFallback>
        </Avatar>
        <View style={styles.profileText}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>
      </View>

      {/* Settings Options */}
      <TouchableOpacity style={styles.option} onPress={() => console.log('Navigate to Profile')}>
        <View style={styles.optionRow}>
          <User size={20} />
          <Text style={styles.optionText}>Profile</Text>
        </View>
        <ChevronRight size={20} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => console.log('Navigate to Change Password')}>
        <View style={styles.optionRow}>
          <KeyRound size={20} />
          <Text style={styles.optionText}>Change Password</Text>
        </View>
        <ChevronRight size={20} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => console.log('Navigate to Report Issue')}>
        <View style={styles.optionRow}>
          <MessageSquareWarning size={20} />
          <Text style={styles.optionText}>Report an Issue</Text>
        </View>
        <ChevronRight size={20} />
      </TouchableOpacity>

      {/* Logout Button with Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogTrigger asChild>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
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
                <Text>Cancel</Text>
              </Button>
            </DialogClose>
            <Button variant="destructive" onPress={handleLogout}>
              <Text>Logout</Text>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileText: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#777',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    marginTop: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
