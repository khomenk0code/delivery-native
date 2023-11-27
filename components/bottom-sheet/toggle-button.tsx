import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ToggleButtonProps {
  buttonTitle: string
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttonTitle }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
})

export default ToggleButton
