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

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View style={styles.View_1}>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/3ca7b91b-50ee-4edf-9340-b1129400a3d0.png"
        }}
        style={styles.Image_3}
      />
      <Text style={styles.Text_5}>Montant totale de dépenses</Text>
      <Text style={styles.Text_7}>Mes dépenses</Text>
      <Text style={styles.Text_9}>Dépense</Text>
      <Text style={styles.Text_13}>Montant</Text>
      <Text style={styles.Text_15}>Transport</Text>
      <Text style={styles.Text_17}>Hotél</Text>
      <Text style={styles.Text_21}>Restauration</Text>
      <Text style={styles.Text_31}> 90 DH</Text>
      <Text style={styles.Text_35}>600 DH</Text>
      <Text style={styles.Text_39}>200 DH</Text>
      <Button
        title="Montant Totale"
        color="#b8ff33"
        style={styles.Button_41}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_96}>890 DH</Text>
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    marginTop: -4,
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  Image_3: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 20,
    borderWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  Text_5: {
    marginLeft: 77,
    marginTop: -33,
    fontFamily: "Merriweather-Bold",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_7: {
    marginLeft: 20,
    marginTop: 28,
    color: "#d63838",
    fontFamily: "Merriweather-Bold"
  },
  Text_9: {
    width: 117,
    marginLeft: 10,
    marginTop: 14,
    paddingLeft: 25,
    borderColor: "#df3030",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_13: {
    width: 142,
    marginLeft: 127,
    marginTop: -31,
    paddingLeft: 40,
    borderColor: "#cf3a3a",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_15: { marginLeft: 13 },
  Text_17: { marginLeft: 20 },
  Text_21: { marginLeft: 7 },
  Text_31: { marginLeft: 150, marginTop: -90 },
  Text_35: { marginLeft: 150 },
  Text_39: { marginLeft: 150 },
  Button_41: { width: "70%" },
  Text_96: { marginLeft: 150, marginTop: -26 },
  Icon_98: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
