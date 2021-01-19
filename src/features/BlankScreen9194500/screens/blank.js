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
    this.state = { TextInput_9: "" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/5f6933bd-b6a1-40e8-9c92-160466dd696b.PNG"
        }}
        style={styles.Image_3}
      />
      <Text style={styles.Text_5}>Placer votre facture ici</Text>
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/1dd7b989-26b7-4f70-aa32-e3a2cd269d70.PNG"
        }}
        style={styles.Image_7}
      />
      <TextInput
        placeholder="               D\xE9pense de  _ _ _ _  DH"
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <Button
        title="Enregistrer"
        color="#24c819"
        style={styles.Button_11}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="&lt;&lt;"
        color="#eeefec"
        style={styles.Button_13}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: { width: 237, height: 55, marginTop: 28, alignSelf: "center" },
  Text_5: { marginLeft: 20, marginTop: 31, fontFamily: "Merriweather-Bold" },
  Image_7: {
    width: 200,
    height: 200,
    marginLeft: 56,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  TextInput_9: {
    width: "77%",
    marginLeft: 31,
    marginTop: 17,
    borderWidth: 2,
    borderBottomWidth: 2
  },
  Button_11: { width: "75%", marginLeft: 65, marginTop: 39 },
  Button_13: {
    width: "42%",
    height: 40,
    marginLeft: 23,
    marginTop: 23,
    fontSize: 38,
    color: "#f2b83a",
    fontWeight: "bold",
    borderColor: "#e3a41c",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 7
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
