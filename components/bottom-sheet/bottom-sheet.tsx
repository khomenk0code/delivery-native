import React, { forwardRef, RefAttributes, useCallback, useMemo, useState } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import colors from '@/constants/Colors';
import ToggleButton from '@/components/bottom-sheet/toggle-button.bottom-sheet';
import InputButton from '@/components/bottom-sheet/input-button.bottom-sheet';
import ConfirmButton from '@/components/bottom-sheet/confirm-button.bottom-sheet';

type ToggleStates = 'Delivery' | 'Pickup';

export type Ref = BottomSheetModal;

interface propsBackdrop extends BottomSheetBackdropProps {}

const BottomSheet: React.ForwardRefExoticComponent<
  RefAttributes<BottomSheetModalMethods>
> = forwardRef<Ref>((props, ref) => {

  const [activeButton, setActiveButton] = useState<ToggleStates>('Delivery');

  const handleToggleButton = (buttonTitle: ToggleStates) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonTitle ? prevActiveButton : buttonTitle
    );
  };

  const { dismiss } = useBottomSheetModal();
  const snapPoints = useMemo(() => ['50%'], []);

  const renderBackdrop = useCallback(
    (props: propsBackdrop) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

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
          <ToggleButton
            buttonTitle={'Delivery'}
            isActive={activeButton === 'Delivery'}
            onPress={() => handleToggleButton('Delivery')}
          />
          <ToggleButton
            buttonTitle={'Pickup'}
            isActive={activeButton === 'Pickup'}
            onPress={() => handleToggleButton('Pickup')}
          />
        </View>
        <InputButton inputText={'Lviv'} iconName={'location-outline'} locationHeader={'Your location'}/>
        <InputButton inputText={'Now'} iconName={'stopwatch-outline'} locationHeader={'Arrival time'}/>
        <ConfirmButton onPress={() => dismiss()} />
      </View>
    </BottomSheetModal>
  );
});

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
});

BottomSheet.displayName = 'BottomSheet';
export default BottomSheet;
