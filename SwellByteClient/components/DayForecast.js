import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import moment from 'moment'
import Hour from './Hour';

const DayForecast = ({ dayData, model }) => {
  const swellDirection = dayData[0];
  const day = moment(Date.parse(dayData[0].time)).format('ddd')
  const sixAm = dayData[6];
  const twelve = dayData[12];
  const sixPm = dayData[18];

  function getCardinalDirection(angle) {
    const directions = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
    return directions[Math.round(angle / 45) % 8];
  }

  const hoursArr = [dayData[6], dayData[12], dayData[18]]
  

  

  return (
    <View style={styles.container}>

      <View>
        <Text style={{color: 'white', fontSize: 18, margin: 10,}}>{day}</Text>

        {hoursArr.map((hour) => <Hour key={hour.time} hourData={hour} model={model}></Hour>)}
        </View>

      
    </View>
  )
}

export default DayForecast
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    
    width: windowWidth-5,
    height: 180,
  }
})