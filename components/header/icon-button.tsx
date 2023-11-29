import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/constants/Colors'

interface IconButtonProps {
  onPress: () => void
  style?: object
  iconName: keyof typeof Ionicons.glyphMap
  iconSize?: number
  iconColor?: string
  backgroundColor?: string
  borderRadius?: number
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  style,
  iconName,
  iconSize = 20,
  iconColor = colors.primary,
  backgroundColor = '#fff',
  borderRadius = 0,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderRadius }, style]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
})

export default IconButton
