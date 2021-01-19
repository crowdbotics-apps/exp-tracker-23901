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
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/5f74bafd-141b-461a-a5ba-11b553dc70e9.png"
              }}
              style={styles.Image_13}
            />
          </View>
          <View style={styles.View_10}>
            <TextInput
              placeholder="Sample text input placeholder"
              style={styles.TextInput_17}
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
        value={this.state.TextInput_21}
        onChangeText={nextValue => this.setState({ TextInput_21: nextValue })}
      />
      <Button
        title="v\xE9rifier les d\xE9penses"
        color="#bb0707"
        onPress={() => alert("Pressed!")}
      />
      <View style={styles.View_34}>
        <View style={styles.View_35} />
        <View style={styles.View_36} />
      </View>
      <View style={styles.View_37}>
        <View style={styles.View_38} />
        <View style={styles.View_39} />
      </View>
      <View style={styles.View_40}>
        <View style={styles.View_41} />
        <View style={styles.View_42} />
      </View>
      <View style={styles.View_43}>
        <View style={styles.View_44} />
        <View style={styles.View_45} />
      </View>
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
  TextInput_17: {
    backgroundColor: "#7696d0",
    fontFamily: "Lato-Bold",
    textAlign: "center"
  },
  TextInput_21: {},
  Button_33: {},
  View_34: { flexDirection: "row" },
  View_35: { width: 150 },
  View_36: { width: 150 },
  View_37: { flexDirection: "row" },
  View_38: { width: 150 },
  View_39: { width: 150 },
  View_40: { flexDirection: "row" },
  View_41: { width: 150 },
  View_42: { width: 150 },
  View_43: { flexDirection: "row" },
  View_44: { width: 150 },
  View_45: { width: 150 }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
