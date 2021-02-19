import * as React from 'react';
import {Calendar} from 'react-native-calendars';
import { 
  Card,
  useTheme
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StudentAttandance = () => {
  const [markedDate, setMarkedDate] = React.useState('')
  const paperTheme = useTheme()
  const key = paperTheme.dark
  console.log(key)

  const getSelectedDay = day => {
    setMarkedDate(day.dateString)
  }

  return (
    <>
      <Calendar
        key={key}
        onDayPress={getSelectedDay}
        enableSwipeMonths={true}
        markedDates={{
          [markedDate]: {
            selected: true,
            selectedColor: '#2F80ED',
            selectedTextColor: 'white'
          }
        }}
        style={{
          width: wp('95%'),
          marginLeft: wp('2%'),
        }}
        theme={{
          calendarBackground: paperTheme.colors.calendarBackground,
          dayTextColor: paperTheme.colors.calendarDay,
          monthTextColor: paperTheme.colors.calendarTitle,
          
        }}
      />
      <Card>

      </Card>
    </>
  );
};

export default StudentAttandance;
