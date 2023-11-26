import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

interface LogoProps {
  onPress: () => void
}

const Logo: React.FC<LogoProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('@/assets/images/bike.png')} />
    </TouchableOpacity>
  )
}

Logo.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default Logo
