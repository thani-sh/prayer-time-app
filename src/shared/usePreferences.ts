import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

export function usePreferences() {
  const [isHanafi, setIsHanafi] = useMMKVStorage('is-hanafi', storage, false);
  return {isHanafi, setIsHanafi};
}
