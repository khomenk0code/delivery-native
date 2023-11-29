import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '@/constants/Colors';

interface ConfirmButtonProps {
  onPress: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
      <Text style={styles.confirmButtonText}>Confirm</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 4,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ConfirmButton;
