import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
  wraper: {
    height: 42,
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textinput: {
    flex: 1,
    width:'100%'
  },
  text: {
    fontSize: 13,
    fontFamily: 'aeria',
    color: 'black',
  },
  error:{
    color:colors.danger,
    fontSize:15,
    paddingTop:5,
  }
});
