import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Cat1 from '../assets/fresh.jpeg';
import {Categories} from '../data/Categories';
import {useNavigation} from '@react-navigation/native';
const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      horizontal>
      {Categories?.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Product')}
            style={styles.catSection}
            key={index}>
            <Image source={item?.image} style={styles.imgStyle} />
            <Text style={styles.title}>{item?.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  catSection: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
