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
} from 'react-native';
  
  var REQUEST_URL ='http://129.31.203.119:3000/apps';


class pay_by_data extends Component {
    constructor(props) {
    super(props);
    this.state = {
      objects: null,
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2,
      };
      // loaded: false, 
  }

    componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          objects: responseData.objects,
        });
      })
      .done();
      
  }

render() {
  if(!this.state.objects) {
    return this.renderLoadingView();
  }

  var object = this.state.objects[0];
  return this.renderObjects(object);
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

renderObjects(object){
  return(
    <View style={styles.container}>
      <Image
      source={{uri:'http://129.31.203.119:3000/files/576717d3055bc00c1a773656'}}
      style={styles.thumbnail}
      />
    <View style={styles.rightContainer}>
      <Text style={styles.title}>{object.title}</Text>
      <Text style={styles.year}>{object.category}</Text>
    </View>

  </View>

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
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
  
AppRegistry.registerComponent('pay_by_data', () => pay_by_data);

