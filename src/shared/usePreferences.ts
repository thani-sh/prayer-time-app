import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();

export type AsrMethod = 'shafi' | 'hanafi';

export function usePreferences() {
  const [asrMethod, setAsrMethod] = useMMKVStorage<AsrMethod>('pref-asr-method', storage, 'shafi');
  return {asrMethod, setAsrMethod};
}
