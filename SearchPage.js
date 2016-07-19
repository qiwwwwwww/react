
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
  
var REQUEST_URL ='http://100.77.204.99:3000/appstore';
var IMG_URL='http://100.77.204.99:3000/files/';

class SearchPage extends Component {
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
      source={{uri:IMG_URL + object.img_id}}
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
    flex: 20,
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
    marginLeft:10,
    marginBottom:10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
    paddingBottom: 20,

  },
});
  
module.exports=SearchPage;

// import React, {
//   Component,
// } from 'react';
// import {
//   AppRegistry,
//   Image,
//   ListView,
//   StyleSheet,
//   Text,
//   View,
//   Navigator,
//   TouchableHighlight,
//   TextInput
// } from 'react-native';
  
// var REQUEST_URL ='http://100.77.204.99:3000/appstore';
// var IMG_URL='http://100.77.204.99:3000/files/';


// class SearchPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchString: 'Facebook'
//     };
//   }
//   onSearchTextChanged(event) {
//     console.log('onSearchTextChanged');
//     this.setState({ searchString: event.nativeEvent.text });
//     console.log(this.state.searchString);
//   }

//   render() {
//     console.log('SearchPage.render');

//     return (
//       <View style={styles.container}>
//         <Text style={styles.description}>
//           Search for houses to buy!
//         </Text>
//         <Text style={styles.description}>
//           Search by place-name, postcode or search near your location.
//         </Text>
//         <View style={styles.flowRight}>
//           <TextInput
//             style={styles.searchInput}
//             value={this.state.searchString}
//             onChange={this.onSearchTextChanged.bind(this)}
//             placeholder='Search via name or postcode'/>
//           <TouchableHighlight style={styles.button}
//               underlayColor='#99d9f4'>
//             <Text style={styles.buttonText}>Go</Text>
//           </TouchableHighlight>
//         </View>
//         <TouchableHighlight style={styles.button}
//             underlayColor='#99d9f4'>
//           <Text style={styles.buttonText}>Location</Text>
//         </TouchableHighlight>
//         <Image source={require('./img/app.png')} style={styles.image}/>

//       </View>
//     );
//   }
// }





// var styles = StyleSheet.create({
//   description: {
//     marginBottom: 20,
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#656565'
//   },
//   container: {
//     padding: 30,
//     marginTop: 65,
//     alignItems: 'center'
//   },
//   flowRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     alignSelf: 'stretch'
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'white',
//     alignSelf: 'center'
//   },
//   button: {
//     height: 36,
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#48BBEC',
//     borderColor: '#48BBEC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'stretch',
//     justifyContent: 'center'
//   },
//   searchInput: {
//     height: 36,
//     padding: 4,
//     marginRight: 5,
//     flex: 4,
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 8,
//     color: '#48BBEC'
//   },
//   image: {
//   width: 217,
//   height: 138
// }
// });

// module.exports = SearchPage;
