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
    this.state = { TextInput_14: "Modifier une d\xE9pense" }
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
      </View>
      <View style={styles.View_4}>
        <View />
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: { width: 300, height: 200 },
  View_8: { flexDirection: "row" },
  View_9: { width: 270, height: 100 },
  Image_12: { width: 50, height: 50 },
  TextInput_14: { width: "50%", height: 100 },
  View_4: { flexDirection: "row" },
  View_5: {},
  View_6: {}
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
