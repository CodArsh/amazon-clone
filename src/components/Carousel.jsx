import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import CarouselSlider, {Pagination} from 'react-native-snap-carousel';
import {CarouselData} from '../data/CarouselData';
const Carousel = () => {
  const carouselRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderWidth = Dimensions.get('screen').width;
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item?.image} style={styles.img} />
      </View>
    );
  };

  return (
    <View style={styles.containerOfCarousel}>
      <CarouselSlider
        ref={carouselRef}
        data={CarouselData}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={500}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={CarouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{position: 'absolute', bottom: 0, alignSelf: 'center'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  img: {width: '100%', height: 230},
  containerOfCarousel: {
    position: 'relative',
  },
});
