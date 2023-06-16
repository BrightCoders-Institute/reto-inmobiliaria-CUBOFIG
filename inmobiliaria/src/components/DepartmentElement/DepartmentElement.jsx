import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBed,
  faHotTub,
  faStar,
  faRuler,
  faHeart,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const DepartmentElement = ({room = {}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.imageStyles}
          source={{
            uri:
              room.image ||
              'https://definicion.de/wp-content/uploads/2009/02/departamento-1.jpg',
          }}
        />
        <View>
          <FontAwesomeIcon icon={faStar} />
          <Text>{room.score}</Text>
        </View>
      </View>
      <View>
        <Text>{room.name}</Text>
        <View>
          <FontAwesomeIcon icon={faLocationDot} />
          <Text>{room.address}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <FontAwesomeIcon icon={faBed} />
            <Text>{room.bedrooms}</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faHotTub} />
            <Text>{room.bathrooms}</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faRuler} />
            <Text>{room.size}</Text>
          </View>
        </View>
        <View>
          <View>{room.price}</View>
          <FontAwesomeIcon icon={faHeart} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#d7eff5',
    borderRadius: 16,
    padding: 10,
    paddingHorizontal: 15,
    height: 120,
  },
  containerImage: {
    width: '35%',
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});

export default DepartmentElement;
