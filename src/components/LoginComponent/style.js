import {StyleSheet} from 'react-native';
import colors from  '../../assets/theme/colors'
export default StyleSheet.create({
  logoimage: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    textAlign:'center',
    fontWeight:'500'
 },
  subtitle: {
    fontSize: 20,
    paddingTop: 10,
    textAlign:'center',
    fontWeight:'500'
  },
  createSection:{
    flexDirection:'row',
    marginTop:10,
  },
  linkBtn:{
    flexDirection:"row",
    color:colors.primary,
    paddingLeft:20,
    fontSize:16
  }
});
