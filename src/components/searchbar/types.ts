import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewProps,
} from 'react-native';

export interface SearchBarProps extends TextInputProps {
  ref: React.Ref<TextInput>;
  searchIcon: React.ReactNode;
  clearIcon: React.ReactNode;
  //showLoading: boolean //ActivityIndicator
  onClear?: () => void;
  // leftIcon
  leftIconContainerStyle?: StyleProp<ViewProps>;
  // rightIcon
  rightIconContainerStyle?: StyleProp<ViewProps>;
  clearTextOnCancel?: boolean;
  cancelButtonTextStyle?: StyleProp<TextStyle>;
  cancelText?: string;
}

export type TextInputEvent = NativeSyntheticEvent<TextInputFocusEventData>;
