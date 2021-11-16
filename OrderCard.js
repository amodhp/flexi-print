import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {Label} from './Label';

class OrderCard extends Component {
  render() {
    const {} = this.props;
    const {cardStyle, imageStyle, textStyleOne,textStyleTwo,textStyleThree,lastTextContainer,iconStyle,lastTextStyle} = styles;
    return (
      <View style={cardStyle}>
        <Image
          source={require('../../assets/Images/notebook/notebook.png')}
          style={imageStyle}
        />
        <View >
          <Label
            style={textStyleOne}
            textWeight={500}
            text="Square Business Cards"
            textColor="black"
            textSize={17}
          />
          <Label
            style={textStyleTwo}
            textWeight={500}
            text="Qty-100"
            textColor="#7E7E7E"
            textSize={14}
          />
          <Label
            style={textStyleThree}
            textWeight={500}
            text="Arrives on 20th Sept"
            textColor="black"
            textSize={14}
          />
          <View style={lastTextContainer}> 
          <Image  source={require('../../assets/Icons/Other/delivery/delivery.png')}  style={iconStyle}/>
          <Label
            style={lastTextStyle}
            textWeight={300}
            text="Out For Delivery"
            textColor="black"
            textSize={13}
          />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    flexDirection:'row',
  },
  imageStyle: {
    marginTop: 24,
    marginBottom: 23,
    marginRight: 194,
    marginLeft: 23,
  },
 
  textStyleOne: {
      marginTop:20,
      marginBottom:104,
      marginLeft:-178,
      marginRight:33,
  },
  textStyleTwo:{
    marginTop:-98,
    marginBottom:77,
    marginLeft:-178,
    marginRight:144,
    
  },
  textStyleThree:{
    marginTop:-72,
    marginBottom:77,
    marginLeft:-178,
    marginRight:144,
  },
  lastTextContainer:{
      flexDirection:'row'
  },
  iconStyle:{
    marginTop:-70,
    marginBottom:77,
    marginLeft:-178,
    marginRight:144,
  },
  lastTextStyle:{
    marginTop:-70,
    marginBottom:77,
    marginLeft:-138,
    marginRight:134,
  }
});

export default OrderCard;
