/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';



const App = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [secHand, setSecHand] = useState();
  const [minuteHand, setMinuteHand] = useState();
  const [hourHand, setHourHand] = useState();

  useEffect(() => {
    setInterval(() => {
      let timestamp = new Date()

      let hours = timestamp.getHours();
      let minutes = timestamp.getMinutes();
      let seconds = timestamp.getSeconds();
      let day = timestamp.getDate();
      let month = timestamp.getMonth() + 1;
      let year = timestamp.getFullYear();

      setTime(hours + ':' + minutes) 

      setSecHand(seconds * 6)
      setMinuteHand((seconds / 60) * 6)
      setHourHand((seconds / 60) * 0.5)

      setDate(day + '/' + month + '/' + year)
    }, 1000);

  }, [])
  

  return (
    <View style={styles.container}>
      <Text style = {styles.time}>{time}</Text>





      
      <Text style = {styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center'
  },
  time:{
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold'
  },
  date:{
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  }
});

export default App;
