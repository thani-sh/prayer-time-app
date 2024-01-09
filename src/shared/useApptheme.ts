import {usePreferences} from './usePreferences';

export interface Theme {
  pageColor: string;
  textColor: string;
  linkColor: string;
  lineColor: string;
}

export const DarkTheme: Theme = {
  pageColor: '#111111',
  textColor: '#ECEFF1',
  linkColor: '#37474F',
  lineColor: '#1c1c1c',
};

export const LightTheme: Theme = {
  pageColor: '#ECEFF1',
  textColor: '#263238',
  linkColor: '#607D8B',
  lineColor: '#B0BEC5',
};

export const useAppTheme = () => {
  const {appTheme} = usePreferences();
  return appTheme === 'light' ? LightTheme : DarkTheme;
};
