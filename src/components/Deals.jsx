import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ReommendProduct from '../assets/recommend.jpg';
const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={ReommendProduct} style={styles.img} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDeal}>
            <Text style={styles.dealText}>18% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>₹ 1,549.00</Text>
          <Text style={styles.mrp}>MRP</Text>
          <Text style={styles.actualPrice}>₹ 1,895.00</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <Text style={styles.allDeals}>See all deals</Text>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  img: {
    height: 280,
    width: '100%',
    marginVertical: 10,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  offDeal: {
    backgroundColor: '#be0201',
    width: 70,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginRight: 7,
  },
  dealText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: 'black',
    fontSize: 18,
    marginVertical: 5,
  },
  mrp: {
    fontSize: 16,
    marginHorizontal: 7,
  },
  actualPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: 'black',
    fontSize: 15,
  },
  allDeals: {
    color: '#017185',
    fontSize: 15,
    marginVertical: 10,
  },
});
