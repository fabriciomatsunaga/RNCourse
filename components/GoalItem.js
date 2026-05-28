import { StyleSheet, View, Text,Pressable } from 'react-native';

function GoalItem (props) {
    return ( 
        <View style={Styles.goalItem}>
            <Pressable style={({pressed}) => pressed && Styles.pressedItem} android_ripple={{color:'#250352'}} onPress={props.onRemoveItem.bind(this,props.id)}>
                <Text style={Styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
        
        
    )
};

export default GoalItem

const Styles = StyleSheet.create({
    goalItem:{
    margin:8,
    borderRadius:6,
    backgroundColor: '#5e0acc',
  },
  pressedItem:{
    opacity:0.5
  },
  goalText:{
    padding:8,
    color:'white'
  }
});