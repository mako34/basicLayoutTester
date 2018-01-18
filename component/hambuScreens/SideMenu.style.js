import { 
    Dimensions,
    } from 'react-native';


    var { height } = Dimensions.get("window");


export default {
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "rgb(37, 40, 41)",
    height: height,
    flexDirection: "column",
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: "red"
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },

  segmentedControlButton: {
    width: 320 / 2,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 40, 41)",

  },
  segmentedText:{
    fontSize: 18,
    color: 'white'
  }
};
