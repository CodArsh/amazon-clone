import {StyleSheet, Text, Image, ScrollView, View} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import sendModey from '../assets/send-money.jpg';
import payBills from '../assets/pay-bills.jpeg';
import scanQr from '../assets/scan-qr.jpeg';
import service1 from '../assets/service1.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';
const Services = () => {
  return (
    <ScrollView
      ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingRight:20}}
      horizontal>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerCont}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerCont}>
            <Image source={sendModey} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerCont}>
            <Image source={payBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
          <View style={styles.innerCont}>
            <Image source={scanQr} style={styles.imgStyle} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
        </View>
      </View>
      {RecentSearchData?.map(item => (
        <View style={styles.outer} key={item?.id} >
          <Text style={styles.imgText}>{item?.title}</Text>
          <Image source={item?.image} style={styles.serviceImg} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  row: {flexDirection: 'row'},
  serviceContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerCont: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  serviceImg: {
    width: '100%',
    height: 120,
    marginTop: 5,
  },
  outer: {
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
    padding: 5,
    width: 120,
  },
  imgText: {
    fontSize: 13,
    color: '#000',
  },
});
