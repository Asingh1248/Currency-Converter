import React from 'react';
import { StyleSheet,TextInput, Text, View,SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert} from 'react-native';


const currencyPerRupee={
   DOLLAR:0.014,
   EURO:0.012,
   POUND:0.011,
   AUSDOLLAR: 0.02,
   CANDOLLAR:0.019,
   YEN: 1.57,
   DINAR: 0.004351,
   RUBEL:0.93,
   BITCOIN:0.000041
        

}
//const url = "https://api.exchangeratesapi.io/latest?base=INR";
export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      inputValue:"",
      resultValue:"0.0"
    };
  }
   buttonPressed=(currency)=>{
      if(this.state.inputValue===""){
        Alert.alert("Enter Some Value :"+ currency)
      }
      if(isNaN(this.state.inputValue)===true){
         Alert.alert("Enter the Numeric Value ")
        }

      let result = parseFloat(this.state.inputValue)*currencyPerRupee
      [currency]

      this.setState({resultValue:result.toFixed(2)})
   }
   
  


  render(){
   return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.screenview}>
         
         <View style={styles.heading}>
              <Text style={styles.heading}>Currency Converter from INR</Text>
          </View>
          <View style={styles.resultcontainer}>
           <Text style={styles.resultValue}>
             {this.state.resultValue}
           </Text>
         </View>
         <View  style={styles.inputcontainer} >
           <TextInput
             style={styles.input}
             selectionColor="#FFF"
             keyboardType="numeric"
             placeholder="Enter Value"
             value={this.state.inputValue}
             onChangeText={inputValue =>
              this.setState({
               inputValue
             })
            }
             
           />
     
         
         </View>
         
         <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("DOLLAR")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>$</Text>
            
            
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("EURO")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Euro</Text>
            
            
            </TouchableOpacity>    

            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("POUND")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Pound</Text>
            
            
            </TouchableOpacity>  

            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("AUSDOLLAR")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Aus</Text>
            
            
            </TouchableOpacity> 
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("CANDOLLAR")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Canada</Text>
            
            
            </TouchableOpacity> 
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("YEN")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Japan</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("DINAR")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>DINAR</Text>
            
            
            </TouchableOpacity> 
            
           
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("RUBEL")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>Rubel</Text>
            
            
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ ()=> this.buttonPressed("BITCOIN")}
              style={styles.converterbutton} 
            >
            <Text style={styles.converterbuttontext}>bitcoin</Text>
            
            
            </TouchableOpacity>  
            

         </View>
      </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 20// handling notch corectly in iOs and android
  },
  screenview: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20 //handling notches,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  resultcontainer: {
    height: 70,
    marginTop: 50,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    borderRadius: 10
  },
  input: {
    color: "#FFF",
    fontSize: 30
  },
  converterbuttoncontainer: {
    //flex:1, Its Not Working Rowwise,Check styles above
    
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop: 20,
    borderColor: "#c1c1c1"
    //borderWidth: 2
  },
  converterbutton: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DE",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
    borderRadius: 15
  },
  converterbuttontext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});