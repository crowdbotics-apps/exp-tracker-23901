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
      TextInput_15: "Supprimer une d\xE9pense",
      TextInput_27: "",
      TextInput_17: "Choisir une D\xE9pense",
      TextInput_19: "",
      TextInput_21: ""
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
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/6f75276e-2b00-4303-b569-b788f1c8696f.jpg"
              }}
              style={styles.Image_12}
            />
          </View>
          <View style={styles.View_10}>
            <TextInput
              placeholder="Sample text input placeholder"
              style={styles.TextInput_15}
              value={this.state.TextInput_15}
              onChangeText={nextValue =>
                this.setState({ TextInput_15: nextValue })
              }
            />
          </View>
        </View>
      </View>
      <TextInput
        placeholder=""
        value={this.state.TextInput_27}
        onChangeText={nextValue => this.setState({ TextInput_27: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_17}
        value={this.state.TextInput_17}
        onChangeText={nextValue => this.setState({ TextInput_17: nextValue })}
      />
      <TextInput
        placeholder="Num\xE9ro de d\xE9pense"
        editable={true}
        keyboardType="numeric"
        style={styles.TextInput_19}
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
      />
      <TextInput
        placeholder="Le montant"
        style={styles.TextInput_21}
        value={this.state.TextInput_21}
        onChangeText={nextValue => this.setState({ TextInput_21: nextValue })}
      />
      <Button
        title="Supprimer"
        color=""
        style={styles.Button_29}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: { width: 300 },
  View_8: { flexDirection: "row" },
  View_9: { width: 55, height: 50 },
  Image_12: { width: 50, height: 50 },
  View_10: { width: 244, height: 50 },
  TextInput_15: {
    width: "90%",
    height: 300,
    paddingTop: 11,
    paddingBottom: 12,
    backgroundColor: "#61b7db",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  TextInput_27: {},
  TextInput_17: {
    height: 40,
    paddingTop: 6,
    backgroundColor: "#c41212",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  TextInput_19: {
    width: "100%",
    height: 60,
    borderColor: "#bb0707",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  TextInput_21: {
    height: 70,
    borderColor: "#198bd2",
    borderWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    textAlign: "center"
  },
  Button_29: { fontFamily: "Lato-Bold" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
