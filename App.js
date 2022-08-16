/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';



const App = () => {
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [secHand, setSecHand] = useState('0deg');
  //const [minuteHand, setMinuteHand] = useState('0deg');
  //const [hourHand, setHourHand] = useState('0deg');

  const hourHand = useRef('0deg');
  const minuteHand = useRef('0deg');

  useEffect(() => {
    setInterval(() => {
      let timestamp = new Date()

      let hours = timestamp.getHours();
      let minutes = timestamp.getMinutes();
      if(minutes < 10) minutes = '0' + minutes;
      console.log(minutes)
      let seconds = timestamp.getSeconds();
      let day = timestamp.getDate();
      let month = timestamp.getMonth() + 1;
      let year = timestamp.getFullYear();

      setTime(hours + ':' + minutes) 

      setSecHand((seconds * 6) + 'deg')
      minuteHand.current = ((6.0*minutes)+((1/60 * 6)*seconds)) + 'deg'; 
      hourHand.current = ((30 * hours) + (0.5 * (minutes + seconds/60))) + 'deg'

      setDate(day + '/' + month + '/' + year)
    }, 1000);

  }, [])
  

  return (
    <View style={styles.container}>
      <Text style = {styles.time}>{time}</Text>


      <View style = {styles.clock}>
      <View style = {styles.center}/>
      <View style = {[styles.hourHand, {transform: [{rotate: hourHand.current}, {translateY: -50}]}]}/>
        <View style = {[styles.minuteHand, {transform: [{rotate: minuteHand.current}, {translateY: -80}]}]}/>
        <View style = {[styles.secondHand, {transform: [{rotate: secHand}, {translateY: -80}]}]}/>
      </View>



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
  },
  clock:{
    borderWidth: 3,
    borderColor: 'white',
    width: 350,
    height: 350,
    borderRadius: 175,
    margin: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hourHand:{
    width: 5,
    height: 100,
    backgroundColor: 'white',
    position: 'absolute'
  },
  minuteHand:{
    width: 5,
    height: 150,
    backgroundColor: 'white',
    position: 'absolute'
  },
  secondHand:{
    width: 3,
    height: 150,
    backgroundColor: 'orange',
  },
  center:{
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  }
});

export default App;
