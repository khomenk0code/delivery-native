import React from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import Logo from '@/components/header/logo.header'
import Title from '@/components/header/title.header'
import SearchBar from '@/components/header/search-bar.header'
import IconButton from '@/components/icon-button'
import colors from '@/constants/Colors'

const Header = () => {
  const handleLogoClick = () => {
    console.log('logo clicked')
  }
  const handleTitleClick = () => {
    console.log('Title pressed')
  }
  const handleUserProfileClick = () => {
    console.log('Title pressed')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Logo onPress={handleLogoClick} />
        <Title onPress={handleTitleClick} />
        <IconButton
          onPress={handleUserProfileClick}
          iconName={'person-outline'}
          backgroundColor={colors.lightGrey}
          borderRadius={50}
        />
      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    paddingHorizontal: 20,
  },
})

export default Header
