import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors';

interface ToggleButtonProps {
  buttonTitle: string
  isActive: boolean
  onPress: () => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonTitle, isActive, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={isActive ? styles.active : styles.inActive}>
      <Text style={isActive ? styles.activeText : styles.inactiveText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  inActive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  inactiveText: {
    color: Colors.primary,
    fontWeight: '700',
  },

})

export default ToggleButton
