import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

interface TitleProps {
  onPress: () => void
}

const Title: React.FC<TitleProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
      <Text style={styles.title}>Delivery · Now</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Lviv</Text>
        <Ionicons
          name="chevron-down"
          size={20}
          color={Colors.primary}
          style={styles.subtitleIcon}
        />
      </View>
    </TouchableOpacity>
  )
}

Title.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleIcon: {
    paddingLeft: 5,
    paddingTop: 1,
  },
})

export default Title
