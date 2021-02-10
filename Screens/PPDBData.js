/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import { Backdrop } from "react-native-backdrop";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PPDBData = () => {
  const [visible, setVisible] = React.useState(false);
  
  const handleOpen = () => {
    setVisible(true);
  };
  
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{
            width: 200,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1,
            backgroundColor: '#fff',
          }}>
          <Text>Handle Backdrop</Text>
        </TouchableOpacity>
      </View>
      <Backdrop
        visible={visible}
        handleClose={handleClose}
        swipeConfig={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        animationConfig={{
          speed: 14,
          bounciness: 4,
        }}
        overlayColor="rgba(0,0,0,0.32)"
        backdropStyle={{
          backgroundColor: '#fff',
        }}
        containerStyle={{
          backgroundColor: 'white',
          height: hp('70%'),
          width: wp('100%'),
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        >
        <View>
          <Text>Backdrop Content</Text>
          <Text>Backdrop Content</Text>
        </View>
      </Backdrop>
    </>
  );
};

export default PPDBData;
