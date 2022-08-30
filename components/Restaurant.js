import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

const Restaurant = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);


    let text;    

    if(isFavorite){
        text = <Text style={styles.text}>Enlever des favoris</Text>;
    } else {
        text = <Text style={styles.text}>Ajouter aux favoris</Text>;
    }

    return (
        <View style={styles.card}>
            <Text>{props.name}</Text>
            <Pressable style={styles.btn} onPress={()=>{props.setFavorites(props.name); setIsFavorite(!isFavorite)}}>
                {text}
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        borderWidth: "1px",
        borderColor: "#000",
        padding: "25px",
        marginBottom: "25px",
        backgroundColor: '#fff',
        textAlign: "center"
    },
    btn: {
        backgroundColor: "blue",
        padding: "10px"
    },
    text: {
        color: '#fff'
    }
});

export default Restaurant;

/**
 * var : portée globale
 * let : portée de block ({}).
 * 
 * 
 * 
 * 
 */