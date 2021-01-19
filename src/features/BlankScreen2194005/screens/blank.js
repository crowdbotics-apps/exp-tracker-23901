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
    <View>
      <View style={styles.View_4}>
        <View style={styles.View_5}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/895fe50f-88c1-4d71-920b-795c0b505070.png"
            }}
            style={styles.Image_16}
          />
          <Text style={styles.Text_20}>Hi Mr X</Text>
        </View>
      </View>
      <View style={styles.View_11}>
        <View>
          <Text style={styles.Text_22}>Mon profile</Text>
        </View>
      </View>
      <View style={styles.View_35}>
        <View style={styles.View_36}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/a04a9fc6-6c79-48fb-af7b-e120b421fa20.png"
            }}
            style={styles.Image_45}
          />
          <Text>Gestion de demande de remboursement </Text>
        </View>
        <View style={styles.View_37}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/3ca7b91b-50ee-4edf-9340-b1129400a3d0.png"
            }}
            style={styles.Image_138}
          />
          <Text>Tracer les dépences</Text>
        </View>
      </View>
      <View style={styles.View_41}>
        <View style={styles.View_42}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/4fddbf76-ad10-4c31-81ec-40d2964e5280.jpg"
            }}
            style={styles.Image_50}
          />
          <Text>calculer les dépences</Text>
        </View>
        <View style={styles.View_43}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23901/55a22aae-1406-45dd-9477-8aac0bf35552.png"
            }}
            style={styles.Image_53}
          />
          <Text>Scanner une facture</Text>
        </View>
      </View>
      <Button title="Quitt\xE9" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_4: { flexDirection: "row" },
  View_5: { width: 300, height: 50 },
  Image_16: { width: 50, height: 50 },
  Text_20: {
    fontSize: 15,
    backgroundColor: "#1d95c9",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center",
    textAlignVertical: "bottom",
    lineHeight: 31,
    letterSpacing: 1
  },
  View_11: { width: 200, height: 40, flexDirection: "row" },
  View_12: {},
  Text_22: {
    paddingLeft: 100,
    paddingRight: 160,
    paddingTop: 7,
    overflow: "hidden",
    alignSelf: "center",
    backgroundColor: "#27409b",
    fontFamily: "Lato-BoldItalic",
    textAlign: "center"
  },
  View_35: { flexDirection: "row" },
  View_36: { width: 130, height: 100 },
  Image_45: { width: 50, height: 50 },
  Text_55: {},
  View_37: { width: 170, height: 100 },
  Image_138: { width: 50, height: 50 },
  Text_102: {},
  View_41: { flexDirection: "row" },
  View_42: { width: 130, height: 100 },
  Image_50: { width: 50, height: 50 },
  Text_115: {},
  View_43: { width: 170, height: 100 },
  Image_53: { width: 50, height: 50 },
  Text_134: {},
  Button_140: {}
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
