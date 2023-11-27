import React, { forwardRef, RefAttributes, useCallback, useMemo } from 'react'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import colors from '@/constants/Colors'
import ToggleButton from '@/components/bottom-sheet/toggle-button'

export type Ref = BottomSheetModal

interface propsBackdrop extends BottomSheetBackdropProps {}

const BottomSheet: React.ForwardRefExoticComponent<
  RefAttributes<BottomSheetModalMethods>
> = forwardRef<Ref>((props, ref) => {
  const { dismiss } = useBottomSheetModal()
  const snapPoints = useMemo(() => ['50%'], [])

  const renderBackdrop = useCallback(
    (props: propsBackdrop) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )

  return (
    <BottomSheetModal
      backgroundStyle={{ backgroundColor: colors.lightGrey, borderRadius: 0 }}
      handleIndicatorStyle={{ display: 'none' }}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.buttonsContainer}>
          <ToggleButton buttonTitle={'Delivery'} />
          <ToggleButton buttonTitle={'Pickup'} />
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => dismiss()}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 16,
    margin: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

BottomSheet.displayName = 'BottomSheet'
export default BottomSheet
