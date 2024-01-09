import {forDate} from '@thani-sh/prayer-time-lk';
import {usePreferences} from './usePreferences';

export function getPrayerTimes(date: Date, isHanafi = false) {
  const times = forDate(date);
  const entries = [
    {key: 'Fajr', val: times.fajr},
    {key: 'Sunrise', val: times.sunrise},
    {key: 'Dhuhr', val: times.dhuhr},
    {key: 'Asr', val: times.asr},
    {key: 'Maghrib', val: times.maghrib},
    {key: 'Isha', val: times.isha},
  ];
  if (isHanafi) {
    entries[3] = {key: 'Asr (حَنَفِية)', val: times.asr_hanafi};
  }
  return entries;
}

export function usePrayerTimes(date: Date) {
  const {isHanafi} = usePreferences();
  return getPrayerTimes(date, isHanafi);
}
