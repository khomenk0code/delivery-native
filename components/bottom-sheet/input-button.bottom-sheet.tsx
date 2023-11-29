import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface LocationProps {
  locationHeader: string
  iconName: keyof typeof Ionicons.glyphMap
  inputText: string
}

const InputButton: React.FC<LocationProps> = ({locationHeader, iconName, inputText}) => {

  return (
    <>
      <Text style={styles.subHeader}>{locationHeader}</Text>
      <Link href={'/'} asChild>
        <TouchableOpacity>
          <View style={styles.inputContainer}>
            <Ionicons name={iconName} size={20} color={Colors.medium}></Ionicons>
            <Text style={{flex: 1}}>{inputText}</Text>
            <Ionicons name={'chevron-forward'} size={20} color={Colors.medium}></Ionicons>
          </View>
        </TouchableOpacity>
      </Link>
    </>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    margin: 16
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  }
})

export default InputButton
