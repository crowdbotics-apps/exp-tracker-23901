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
    this.state = { TextInput_10: "Demandes de remboursement" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <View>
        <TextInput
          placeholder="Demandes de remboursement"
          style={styles.TextInput_10}
          value={this.state.TextInput_10}
          onChangeText={nextValue => this.setState({ TextInput_10: nextValue })}
        />
      </View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/412a5a81-5dc1-4633-af07-1d92c71983f6.png"
        }}
        style={styles.Image_12}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {},
  TextInput_10: {
    width: "123%",
    height: 39,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 11,
    paddingLeft: 36,
    paddingRight: 24,
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
  Image_12: {
    width: 50,
    height: 50,
    marginLeft: 8,
    marginRight: 4,
    marginTop: -32,
    marginBottom: 5,
    paddingTop: 1,
    paddingBottom: 1,
    alignSelf: "flex-start"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
