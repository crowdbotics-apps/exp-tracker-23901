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
      <Button
        title="Ajouter une demande"
        color="#eeeff2"
        style={styles.Button_14}
        onPress={() => alert("Pressed!")}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/4de07036-a745-4710-9cc4-5f6a5f2d5bdd.png"
        }}
        style={styles.Image_16}
      />
      <Button
        title="Chercher une demande"
        color="#eeeff2"
        style={styles.Button_18}
        onPress={() => alert("Pressed!")}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/509f2536-2517-4e95-9c6d-5cc81dda3bc7.png"
        }}
        style={styles.Image_20}
      />
      <Button
        title="Modifier une demande"
        color="#eeeff2"
        style={styles.Button_22}
        onPress={() => alert("Pressed!")}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/0e16671e-f993-43db-b889-6f4de827998f.png"
        }}
        style={styles.Image_24}
      />
      <Button
        title="Supprimer une demande"
        color="#eeeff2"
        style={styles.Button_26}
        onPress={() => alert("Pressed!")}
      />
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/225dfafc-6728-458e-a659-4647cde7c520.png"
        }}
        style={styles.Image_28}
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
  },
  Button_14: {
    height: 35,
    marginTop: 46,
    alignSelf: "center",
    fontSize: 15,
    color: "#131111",
    fontFamily: "Roboto-Regular",
    lineHeight: 13
  },
  Image_16: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -33,
    marginBottom: 2,
    paddingLeft: -1,
    paddingRight: -1,
    paddingBottom: -1,
    alignSelf: "flex-end"
  },
  Button_18: {
    height: 35,
    marginTop: 40,
    marginBottom: 4,
    alignSelf: "center",
    fontSize: 15,
    color: "#131111",
    fontFamily: "Roboto-Regular"
  },
  Image_20: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -33,
    marginBottom: 2,
    alignSelf: "flex-end"
  },
  Button_22: {
    height: 35,
    marginTop: 40,
    alignSelf: "center",
    fontSize: 15,
    color: "#131111",
    fontFamily: "Roboto-Regular"
  },
  Image_24: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -33,
    marginBottom: 2,
    alignSelf: "flex-end"
  },
  Button_26: { height: 35, marginTop: 40 },
  Image_28: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: -33,
    marginBottom: 2,
    alignSelf: "flex-end"
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
