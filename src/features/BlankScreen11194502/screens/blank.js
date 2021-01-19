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
      TextInput_17: "v\xE9rifier les d\xE9penses",
      TextInput_19: ""
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
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.Image_13}
            />
          </View>
          <View style={styles.View_10}>
            <TextInput
              placeholder="Sample text input placeholder"
              value={this.state.TextInput_17}
              onChangeText={nextValue =>
                this.setState({ TextInput_17: nextValue })
              }
            />
          </View>
        </View>
      </View>
      <TextInput
        placeholder=""
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: { width: 300 },
  View_8: { flexDirection: "row" },
  View_9: { width: 50, height: 50 },
  Image_13: { width: 50, height: 50 },
  View_10: { width: 250, height: 50 },
  TextInput_17: {},
  TextInput_19: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
