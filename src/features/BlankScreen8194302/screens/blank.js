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
      TextInput_25: "Ajouter une d\xE9pense",
      DateTimePicker_36: new Date("")
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View>
        <TextInput
          placeholder="Sample text input placeholder"
          style={styles.TextInput_25}
          value={this.state.TextInput_25}
          onChangeText={nextValue => this.setState({ TextInput_25: nextValue })}
        />
      </View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/1474a5ef-b54d-45cb-b2f1-4870aa8320c8.png"
        }}
        style={styles.Image_27}
      />
      <Text style={styles.Text_29}>Date</Text>
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_36}
        date={this.state.DateTimePicker_36}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_36: selectedDate })
        }
      />
      <Text style={styles.Text_38}>Heure </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {},
  TextInput_25: {
    width: "123%",
    height: 39,
    marginLeft: 13,
    marginRight: -31,
    marginBottom: 11,
    paddingLeft: 36,
    paddingRight: 45,
    paddingTop: 7,
    paddingBottom: 17,
    alignSelf: "flex-end",
    fontSize: 15,
    color: "#060951",
    backgroundColor: "#61b7db",
    fontFamily: "Roboto-Bold",
    textAlign: "right",
    textTransform: "capitalize",
    lineHeight: 13
  },
  Image_27: {
    width: 50,
    height: 50,
    marginLeft: 8,
    marginRight: 4,
    marginTop: -32,
    marginBottom: 5,
    paddingTop: 1,
    paddingBottom: 1,
    alignSelf: "flex-start"
  },
  Text_29: {
    marginLeft: 13,
    marginTop: 25,
    paddingLeft: 8,
    paddingRight: 6,
    paddingTop: 7,
    fontSize: 15,
    color: "#272626",
    fontFamily: "Roboto-Regular",
    borderColor: "#8a8585"
  },
  DateTimePicker_36: {
    width: "85%",
    height: 30,
    paddingLeft: 90,
    alignSelf: "center",
    color: "#635f5f",
    backgroundColor: "#eeeff2"
  },
  Text_38: {
    marginLeft: 13,
    marginTop: 15,
    fontSize: 15,
    color: "#272626",
    fontFamily: "Roboto-Regular"
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
