
import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ViewPagerAndroid,
  ScrollView


} from 'react-native';
  
var REQUEST_URL ='http://100.77.204.69:3000/appstore';
var IMG_URL='http://100.77.204.69:3000/files/';

class FrontPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
      }),
       loaded: false, 
  };
}

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.objects),
          loaded: true,
        });
      })
      .done();
      
  }

render(object) {
  if(!this.state.loaded) {
    return this.renderLoadingView();
  }

  return(
        <ScrollView>

        <ViewPagerAndroid style={styles.pageStyle} initialPage={0}>
          <View style={styles.container}>
            <Image
            source={{uri:'http://pokerfuse.com/site_media/media/uploads/news/clash-of-clans_orig_full_sidebar.jpg'}}
            style={styles.promotionStyle}
            />
           </View>

          <View style={styles.container}>
            <Image
            source={{uri:'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/18/1426693437380/678bc9d4-f65e-4f63-8fe4-ad1186a7976c-2060x1236.jpeg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly91cGxvYWRzLmd1aW0uY28udWsvMjAxNi8wNS8yNS9vdmVybGF5LWxvZ28tMTIwMC05MF9vcHQucG5n&s=4d4ffa7814d93b10f86df956456a139c'}}
            style={styles.promotionStyle}
            />
           </View>

          <View style={styles.container}>
            <Image
            source={{uri:'https://i.ytimg.com/vi/_UJRe2-n6Pc/maxresdefault.jpg'}}
            style={styles.promotionStyle}
            />
           </View>
              

        </ViewPagerAndroid>

          <Text style={styles.title}>Hot This Week</Text>

          <ListView
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderObjects.bind(this)}
            style={styles.listView}
          />

          <View style={styles.separator} />
          <Text style={styles.title}>New Games We Love </Text>

          <ListView
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderObjects.bind(this)}
            style={styles.listView}
          />

          <View style={styles.separator} />
          <Text style={styles.title}>Learn Something new </Text>

          <ListView
            horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderObjects.bind(this)}
            style={styles.listView}
          />

      </ScrollView>

    );
    } 

  

renderLoadingView() {
  return(
    <View style={styles.container}>
    <Text>
    Loading App。。。
    </Text>
    </View>
    );
}

gotoDetail(object){
	
	this.props.navigator.push(
	{
		name: 'page2',
		title: 'detail',
		passProps:{Object: object},
	}

	);

}
renderObjects(object){

  return(

        <TouchableHighlight 
      		   		underlayColor='#dddddd'
      		    	onPress={() => this.gotoDetail(object)}
      		    >
          <View style={styles.container}>
            <Image
            source={{uri:IMG_URL + object.img_id}}
            style={styles.thumbnail}
            />
      	    <View style={styles.rightContainer}>
      		    <Text style={styles.year}>{object.title}</Text>
              <Text style={styles.category}>{object.category}</Text>
      	    </View>
        	</View>
        </TouchableHighlight>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  rightContainer: {
    flex: 20,
  },
  title: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'left',
    marginLeft:10
  },
  year: {
    textAlign: 'center',
    fontSize: 10,

  },
  category:{
    textAlign: 'center',
    fontSize: 8,
  },
  thumbnail: {
    width: 81,
    height: 81,
    marginLeft:10,
    marginBottom:10,
  },
  listView: {
    paddingTop: 15,
    backgroundColor: '#F5FCFF',
    marginLeft:10,

  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    height:200,
  },
  promotionStyle: {
    width: 400,
    height: 300,
    marginTop:100,

  },
  card: {
    flex: 1,
    backgroundColor: '#ccc',
    width: 80,
    margin: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
    marginLeft:10
  },

});
  
module.exports=FrontPage;