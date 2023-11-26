import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import colors from '@/constants/Colors'

const SearchInput: React.FC = () => {
  return (
    <View style={styles.searchField}>
      <Ionicons
        style={styles.searchIcon}
        name={'ios-search-outline'}
        size={20}
        color={Colors.medium}
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, groceries, dishes..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchField: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  input: {
    padding: 10,
    color: colors.mediumDark,
  },
})

export default SearchInput
