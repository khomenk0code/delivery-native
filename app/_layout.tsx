import { Stack } from 'expo-router'
import Header from '@/components/header/header'
import React from 'react'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function RootLayoutNav() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <Header />,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  )
}
