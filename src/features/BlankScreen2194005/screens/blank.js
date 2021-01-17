import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View style={styles.View_4}>
        <View style={styles.View_5}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.Image_16}
          />
          <Text style={styles.Text_20}>Hi Mr X</Text>
        </View>
      </View>
      <View style={styles.View_11}>
        <View>
          <Text style={styles.Text_22}>Mon profile</Text>
        </View>
      </View>
      <View style={styles.View_35}>
        <View style={styles.View_36}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.Image_45}
          />
        </View>
        <View style={styles.View_37}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.Image_48}
          />
        </View>
      </View>
      <View style={styles.View_41}>
        <View style={styles.View_42}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.Image_50}
          />
        </View>
        <View style={styles.View_43}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.Image_53}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_4: { flexDirection: "row" },
  View_5: { width: 260, height: 50 },
  Image_16: { width: 40, height: 30 },
  Text_20: {
    fontSize: 15,
    backgroundColor: "#1d95c9",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center",
    textAlignVertical: "bottom",
    lineHeight: 31,
    letterSpacing: 1
  },
  View_11: { width: 200, height: 40, flexDirection: "row" },
  View_12: {},
  Text_22: {
    paddingLeft: 100,
    paddingRight: 160,
    paddingTop: 7,
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: "#27409b",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  View_35: { flexDirection: "row" },
  View_36: { width: 100, height: 100 },
  Image_45: { width: 50, height: 50 },
  View_37: { width: 170, height: 100 },
  Image_48: { width: 50, height: 500 },
  View_41: { flexDirection: "row" },
  View_42: { width: 173, height: 100 },
  Image_50: { width: 50, height: 50 },
  View_43: { width: 96, height: 100 },
  Image_53: { width: 50, height: 50 }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
