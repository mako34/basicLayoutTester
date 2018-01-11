import React from 'react';
import {
    StyleSheet, Dimensions
} from 'react-native';

const styles = StyleSheet.create({

    ///refactor start


  statusBar: {
    backgroundColor: '#F3F3F3',
    
  },
  navBar: {
    //android
    backgroundColor: '#F3F3F3',

    //all?
    width:Dimensions.get('window').width,

    
  },
  navBarStyle: {
    backgroundColor: '#ff0000',

  },  


  image: {
    width: 30,
  },

  ///refactor end


  icon: {
    width: 26,
    height: 26,
  },

  searchIcon: {
    width: 60,
    height: 60,
  },

  
  button: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#7567B1',
    justifyContent: 'center'
  },
  buttonText: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 16
  }
   

});

export default styles;