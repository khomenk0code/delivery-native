import { Stack } from 'expo-router'
import Header from '@/components/header/header'
import React from 'react'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header />,
        }}
      />
    </Stack>
  )
}
