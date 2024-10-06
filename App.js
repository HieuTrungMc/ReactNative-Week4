import { Text, SafeAreaView, StyleSheet, Image, View, Button, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import mobileImage from './images/vs_blue.png';
import star from './images/star.png';
import question from './images/question.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={mobileImage} />
      <Text style={{
    textAlign: 'center',
    fontWeight: "400",
    fontSize: "15px",
  }}>
      Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      
    
    <View style={styles.ratings}>
    <Image source={star}/><Image source={star}/><Image source={star}/><Image source={star}/><Image source={star}/>
    <Text style={{paddingLeft: '30px'}}>(Xem 828 đánh giá)</Text>
    </View>
    <View style={styles.price}>
    <Text style={styles.price}>1.790.000đ</Text>
    <Text style={{paddingLeft: '30px', textDecorationLine: 'line-through', textDecorationColor: 'black' , color: 'gray'}}>1.790.000đ</Text>
    </View>
    <Text style={{fontWeight: 'bold', color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN  <Image style= {{}} source={question}/></Text>
      <TouchableOpacity style={{borderRadius:5, borderWidth:1, alignItems:"center", backgroundColor:"gray"}}>
        <Text style={{color:"black"}}>4 MÀU-CHỌN MÀU</Text>
      </TouchableOpacity>

</View>

  );
}

const styles = StyleSheet.create({
  deviceInfo: {
    marginLeft: 0,
    padding: 10,
    marginRight: "auto",
   
  },
  container: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratings: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center'
    },
  price: {
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold'
    }    
});
