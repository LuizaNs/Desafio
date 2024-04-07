import React from "react";
import{ View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tarefa= (props) => {

    return (
     <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View>style={styles.circular}</View>
    
     </View>
    )
}


const styles = StyleSheet.create({

    circular: {
        width: 12,
        height: 12,
        borderColor:'#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },

    itenText: {
        maxWidth: '80%',

    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItens: 'center',
        flexWrap:'wrap',
    },

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
    },
});
    



export default Tarefa;