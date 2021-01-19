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
      TextInput_14: "Modifier une d\xE9pense",
      TextInput_16: "Choisir une d\xE9pense",
      TextInput_20: "",
      DateTimePicker_22: new Date(""),
      TextInput_24: "",
      TextInput_27: "",
      TextInput_29: ""
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View style={styles.View_3}>
        <View style={styles.View_8}>
          <View style={styles.View_9}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/1f358f75-d3d7-43d5-a340-8b7c70aa191e.png"
              }}
              style={styles.Image_12}
            />
            <TextInput
              placeholder="Sample text input placeholder"
              style={styles.TextInput_14}
              value={this.state.TextInput_14}
              onChangeText={nextValue =>
                this.setState({ TextInput_14: nextValue })
              }
            />
          </View>
        </View>
        <TextInput
          placeholder="Sample text input placeholder"
          style={styles.TextInput_16}
          value={this.state.TextInput_16}
          onChangeText={nextValue => this.setState({ TextInput_16: nextValue })}
        />
        <TextInput
          placeholder="Num\xE9ro du d\xE9pense"
          style={styles.TextInput_20}
          value={this.state.TextInput_20}
          onChangeText={nextValue => this.setState({ TextInput_20: nextValue })}
        />
        <DateTimePicker
          showIcon={false}
          date={this.state.DateTimePicker_22}
          onDateChange={selectedDate =>
            this.setState({ DateTimePicker_22: selectedDate })
          }
        />
        <TextInput
          placeholder="Heure"
          value={this.state.TextInput_24}
          onChangeText={nextValue => this.setState({ TextInput_24: nextValue })}
        />
        <TextInput
          placeholder="Nature"
          value={this.state.TextInput_27}
          onChangeText={nextValue => this.setState({ TextInput_27: nextValue })}
        />
        <TextInput
          placeholder="prix"
          keyboardType="numeric"
          value={this.state.TextInput_29}
          onChangeText={nextValue => this.setState({ TextInput_29: nextValue })}
        />
        <Button
          title="Enregistrer"
          color="#0f91d2"
          onPress={() => alert("Pressed!")}
        />
        <Icon name="arrow-left" style={styles.Icon_46} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {
    width: 300,
    height: 350,
    borderColor: "#e82121",
    borderStyle: "dashed"
  },
  View_8: { flexDirection: "row" },
  View_9: { width: 300, height: 50 },
  Image_12: { width: 50, height: 50 },
  TextInput_14: {
    width: "50%",
    height: 100,
    paddingLeft: 11,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 12,
    backgroundColor: "#61b7db",
    fontFamily: "Lato-BoldItalic"
  },
  TextInput_16: {
    backgroundColor: "#c43131",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  TextInput_20: {
    borderColor: "#b50d0d",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  DateTimePicker_22: {},
  TextInput_24: {},
  TextInput_27: {},
  TextInput_29: {},
  Button_44: {},
  Icon_46: { color: "#4bca49" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
