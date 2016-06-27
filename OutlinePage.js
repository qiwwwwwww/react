
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
  TouchableHighlight
} from 'react-native';
  
var REQUEST_URL ='http://100.77.204.241:3000/apps';


class OutlinePage extends Component {
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

render() {
  if(!this.state.loaded) {
    return this.renderLoadingView();
  }

  return(
    <ListView
    dataSource={this.state.dataSource}
    renderRow={this.renderObjects.bind(this)}
    style={styles.listView}
    />
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
      source={{uri:'http://100.77.204.241:3000/files/5769dbed055bc0089ee59217'}}
      style={styles.thumbnail}
      />
	    <View style={styles.rightContainer}>
		    
		      	<Text style={styles.title}>{object.title}</Text>

		    <Text style={styles.year}>{object.category}</Text>
	    </View>

  	</View>
</TouchableHighlight>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 81,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
  
module.exports=OutlinePage;