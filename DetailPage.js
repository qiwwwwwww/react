import React, {
  Component,
} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
  

class DetailPage extends Component{
	
	render(){
		var object = this.props.route.passProps.Object;

		return (
	      <ScrollView contentContainerStyle={styles.contentContainer}>
	        <View style={styles.mainSection}>
	          <Image
	            source={{uri:'http://100.77.204.241:3000/files/5769dbed055bc0089ee59217'}}
	            style={styles.detailsImage}
	          />
	          <View style={styles.rightPane}>
	          	<Text>{object.title}</Text>
				<Text>{object.category}</Text>
	          </View>
	        </View>

	        <View style={styles.separator} />
	        <Text>
	          {object.description}
	        </Text>
	      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    marginTop: 10,
  },
  ratingTitle: {
    fontSize: 14,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  mpaaWrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  mpaaText: {
    fontFamily: 'Palatino',
    fontSize: 13,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  castTitle: {
    fontWeight: '500',
    marginBottom: 3,
  },
  castActor: {
    marginLeft: 2,
  },
});

module.exports = DetailPage;