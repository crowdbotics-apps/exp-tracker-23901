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
      DateTimePicker_36: new Date(""),
      TextInput_41: "15:00",
      TextInput_43: "Nature",
      TextInput_52: "_ _ _ _ _ _ _ _ _ _ _ _ _",
      TextInput_56: ""
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
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_41}
        value={this.state.TextInput_41}
        onChangeText={nextValue => this.setState({ TextInput_41: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_43}
        value={this.state.TextInput_43}
        onChangeText={nextValue => this.setState({ TextInput_43: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_52}
        value={this.state.TextInput_52}
        onChangeText={nextValue => this.setState({ TextInput_52: nextValue })}
      />
      <Text style={styles.Text_54}>Prix</Text>
      <TextInput
        placeholder="Number DHs"
        keyboardType="numeric"
        style={styles.TextInput_56}
        value={this.state.TextInput_56}
        onChangeText={nextValue => this.setState({ TextInput_56: nextValue })}
      />
      <Button
        title="Enregistrer"
        color="#289f5b"
        style={styles.Button_58}
        onPress={() => alert("Pressed!")}
      />
      <Icon name="arrow-circle-left" style={styles.Icon_60} />
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
  },
  TextInput_41: {
    width: "86%",
    height: -14,
    marginLeft: 22,
    marginRight: 31,
    marginBottom: 4,
    paddingLeft: 116,
    paddingRight: 54,
    color: "#635f5f",
    backgroundColor: "#eeeff2"
  },
  TextInput_43: {
    width: "90%",
    marginLeft: 13,
    marginTop: 15,
    fontSize: 15,
    color: "#272626",
    fontFamily: "Roboto-Regular"
  },
  TextInput_52: {
    width: "86%",
    height: -14,
    marginLeft: 22,
    marginRight: 31,
    marginBottom: 4,
    color: "#635f5f",
    backgroundColor: "#eeeff2",
    textAlign: "center"
  },
  Text_54: {
    width: 90,
    marginLeft: 13,
    marginTop: 15,
    fontSize: 15,
    color: "#272626",
    fontFamily: "Roboto-Regular"
  },
  TextInput_56: {
    width: "86%",
    height: -14,
    marginLeft: 22,
    marginRight: 31,
    marginBottom: 4,
    color: "#635f5f",
    backgroundColor: "#eeeff2",
    textAlign: "center"
  },
  Button_58: {
    width: "74%",
    height: 27,
    marginLeft: 67,
    marginRight: 4,
    marginTop: 24,
    marginBottom: 13,
    paddingLeft: 4
  },
  Icon_60: { color: "#4bca49" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
