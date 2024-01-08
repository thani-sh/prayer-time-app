import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

function formatDate(date: Date): string {
  return date.toLocaleString('en', {month: 'long', day: 'numeric'});
}

export interface Props {
  value: Date;
  onChange: (date: Date) => void;
}

export default (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button color="#000000" title={formatDate(props.value)} onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        mode="date"
        theme="dark"
        date={props.value}
        onConfirm={date => {
          setOpen(false);
          props.onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
