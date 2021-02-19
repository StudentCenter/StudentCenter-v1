/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Calendar} from 'react-native-calendars';

const StudentAttandance = () => {
  return (
    <>
      <Calendar
        onDayPress={(day) => {console.log('selected day', day)}}
        enableSwipeMonths={true}
      />
    </>
  );
};

export default StudentAttandance;
