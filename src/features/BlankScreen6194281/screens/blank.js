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

    this.state = {
      TextInput_22: "Voir mes d\xE9pense",
      DateTimePicker_35: new Date(""),
      TextInput_64: "",
      TextInput_67: ""
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View style={styles.View_3}>
        <View style={styles.View_15}>
          <View style={styles.View_16}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/20d2b5d9-9864-44de-93fd-2f9ec651d01c.jpg"
              }}
              style={styles.Image_19}
            />
          </View>
          <View style={styles.View_17}>
            <TextInput
              placeholder="Sample text input placeholder"
              style={styles.TextInput_22}
              value={this.state.TextInput_22}
              onChangeText={nextValue =>
                this.setState({ TextInput_22: nextValue })
              }
            />
          </View>
        </View>
        <View style={styles.View_27}>
          <View style={styles.View_28}>
            <Text style={styles.Text_31}>Date</Text>
          </View>
          <View style={styles.View_29}>
            <DateTimePicker
              showIcon={false}
              style={styles.DateTimePicker_35}
              date={this.state.DateTimePicker_35}
              onDateChange={selectedDate =>
                this.setState({ DateTimePicker_35: selectedDate })
              }
            />
          </View>
        </View>
        <View style={styles.View_48}>
          <View style={styles.View_49}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/83d94e13-a6d9-454c-b946-c97169408e05.png"
              }}
              style={styles.Image_52}
            />
          </View>
          <View style={styles.View_50}>
            <TextInput
              placeholder="-- DH"
              style={styles.TextInput_64}
              value={this.state.TextInput_64}
              onChangeText={nextValue =>
                this.setState({ TextInput_64: nextValue })
              }
            />
          </View>
        </View>
        <View style={styles.View_57}>
          <View style={styles.View_58}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/0de59158-895e-4421-b931-8c6181e65b50.png"
              }}
              style={styles.Image_61}
            />
          </View>
          <View style={styles.View_59}>
            <TextInput
              placeholder="--DH"
              style={styles.TextInput_67}
              value={this.state.TextInput_67}
              onChangeText={nextValue =>
                this.setState({ TextInput_67: nextValue })
              }
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {
    width: 290,
    height: 200,
    overflow: "hidden",
    fontFamily: "Lato-BoldItalic"
  },
  View_15: { flexDirection: "row" },
  View_16: { width: 51, height: 50 },
  Image_19: { width: 50, height: 50 },
  View_17: { width: 238, height: 50 },
  TextInput_22: {
    paddingTop: 10,
    paddingBottom: 11,
    backgroundColor: "#61b7db",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  View_27: { flexDirection: "row" },
  View_28: { width: 58 },
  Text_31: {
    width: 55,
    height: 30,
    backgroundColor: "#8b0418",
    fontFamily: "Lato-BoldItalic",
    borderColor: "#b92727"
  },
  View_29: { width: 126 },
  DateTimePicker_35: {
    width: "160%",
    height: 60,
    borderColor: "#ac1b1b",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  View_48: { flexDirection: "row" },
  View_49: { width: 35, height: 30 },
  Image_52: { width: 30, height: 30 },
  View_50: { width: 235 },
  TextInput_64: {
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  View_57: { height: 50, flexDirection: "row" },
  View_58: { width: 33, height: 30 },
  Image_61: { width: 30, height: 30 },
  View_59: { width: 250, height: 30 },
  TextInput_67: {
    width: "095%",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
