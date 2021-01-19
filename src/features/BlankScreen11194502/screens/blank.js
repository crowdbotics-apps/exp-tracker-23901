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
      TextInput_21: "",
      TextInput_52: "User",
      TextInput_70: "",
      TextInput_54: "Date",
      DateTimePicker_89: new Date(""),
      TextInput_58: "Nature",
      TextInput_78: "",
      TextInput_64: "Prix",
      TextInput_85: ""
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
        <View style={styles.View_35}>
          <TextInput
            placeholder="Sample text input placeholder"
            style={styles.TextInput_52}
            value={this.state.TextInput_52}
            onChangeText={nextValue =>
              this.setState({ TextInput_52: nextValue })
            }
          />
        </View>
        <View style={styles.View_36}>
          <TextInput
            placeholder="User"
            style={styles.TextInput_70}
            value={this.state.TextInput_70}
            onChangeText={nextValue =>
              this.setState({ TextInput_70: nextValue })
            }
          />
        </View>
      </View>
      <View style={styles.View_37}>
        <View style={styles.View_38}>
          <TextInput
            placeholder="Sample text input placeholder"
            style={styles.TextInput_54}
            value={this.state.TextInput_54}
            onChangeText={nextValue =>
              this.setState({ TextInput_54: nextValue })
            }
          />
        </View>
        <View style={styles.View_39}>
          <DateTimePicker
            showIcon={false}
            style={styles.DateTimePicker_89}
            date={this.state.DateTimePicker_89}
            onDateChange={selectedDate =>
              this.setState({ DateTimePicker_89: selectedDate })
            }
          />
        </View>
      </View>
      <View style={styles.View_40}>
        <View style={styles.View_41}>
          <TextInput
            placeholder="Sample text input placeholder"
            style={styles.TextInput_58}
            value={this.state.TextInput_58}
            onChangeText={nextValue =>
              this.setState({ TextInput_58: nextValue })
            }
          />
        </View>
        <View style={styles.View_42}>
          <TextInput
            placeholder="Nature"
            style={styles.TextInput_78}
            value={this.state.TextInput_78}
            onChangeText={nextValue =>
              this.setState({ TextInput_78: nextValue })
            }
          />
        </View>
      </View>
      <View style={styles.View_43}>
        <View style={styles.View_44}>
          <TextInput
            placeholder="Sample text input placeholder"
            style={styles.TextInput_64}
            value={this.state.TextInput_64}
            onChangeText={nextValue =>
              this.setState({ TextInput_64: nextValue })
            }
          />
        </View>
        <View style={styles.View_45}>
          <TextInput
            placeholder="Prix"
            style={styles.TextInput_85}
            value={this.state.TextInput_85}
            onChangeText={nextValue =>
              this.setState({ TextInput_85: nextValue })
            }
          />
        </View>
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
  View_35: { width: 102 },
  TextInput_52: { width: "50%", backgroundColor: "#e5a4a4" },
  View_36: { width: 197 },
  TextInput_70: {
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  View_37: { flexDirection: "row" },
  View_38: { width: 101 },
  TextInput_54: { width: 50, backgroundColor: "#e5a4a4" },
  View_39: { width: 198 },
  DateTimePicker_89: {
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  View_40: { flexDirection: "row" },
  View_41: { width: 101 },
  TextInput_58: { width: "50%", backgroundColor: "#e5a4a4" },
  View_42: { width: 198 },
  TextInput_78: {
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  View_43: { flexDirection: "row" },
  View_44: { width: 102 },
  TextInput_64: { width: "50%", backgroundColor: "#e5a4a4" },
  View_45: { width: 198 },
  TextInput_85: {
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
