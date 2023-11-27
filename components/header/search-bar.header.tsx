import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchInput from '@/components/header/text-input.search-bar'
import IconButton from '@/components/header/icon-button'

const SearchBar = () => {
  const handleOptionsPress = () => {
    console.log('Options button pressed')
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <SearchInput />
        <IconButton
          onPress={handleOptionsPress}
          iconName="options-outline"
          backgroundColor="transparent"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
})

export default SearchBar
