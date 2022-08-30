import { StatusBar } from 'expo-status-bar'; // La statusbar représenté la barre en haut de votre application.
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'; 
// StyleSheet : API du style. 
// Text : un composant de texte 
// View : Un composant (de vue) container.
// Tout doit être importé au sein de react-native.
import restaurants from './assets/restaurant.json'; // liste de données 
import Restaurant from './components/Restaurant'; // Le composant permettant d'afficher chaque restaurants.
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
// NavigationContainer va englober notre menu de navigation (un peu l'équivalent de la balise nav).
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// createNativeStackNavigator permet de créer un stack, cela va représenter un ensemble de vue qui peuvent être superposées. Cela va permettre de créer la liste des composants (équivalent du système de page) que l'on va pouvoir afficher
import Favorite from './components/Favorite';

const Stack = createNativeStackNavigator();

export default function Provider(){
  // Provider va permettre de mettre en place des données (paramètres) générales à l'ensemble de application.
  // On va utiliser ce composant pour ajouter un menu général à l'ensemble de notre application.

  // Stack.Navigator l'ensemble des affichages sur lesquels on pourra naviguer.
  // Stack.Screen représente les différents affichages sur lesquels on pourra naviguer.
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={App} />
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  )


  // On déplace l'export par défaut sur le composant Provider car il doit charger avant le composant App.
}

function App({ navigation }) {

  const [favorites, setFavorites] = useState([]);

  const getAllRestaurants = ({item}) => {
    // {item} permet de faire référence à chaque restaurants un par un. 
    return <Restaurant name={item.name} setFavorites={addFavorites}/>
    // On retourne un composant Restaurant pour chaque restaurant comme on le faisait avec la fonction .map
  }

  const addFavorites = (name) => {
    let favoritesClone = favorites.slice(); // Je copie le tableau favorites pour le modifier
    // On ne peut pas modifier directement une constante du state. 
    // ici favorites est un tableau, on ne peut pas utiliser la fonction push directement dessus.
    if(favoritesClone.includes(name) != true){
      favoritesClone.push(name); // On ajoute le restaurant au sein des favoris
      setFavorites(favoritesClone); // On modifie le state en remplaçant l'ancien tableau par le nouveau mis à jour.

    } else {
      let index = favoritesClone.indexOf(name);
      favoritesClone.splice(index, 1); 
      setFavorites(favoritesClone);
    }
    // .includes() permet de retourner un boolean quant à l'existence d'une valeur dans le tableau. Si la valeur existe au sein du tableau, on aura true, si elle n'existe pas, on aura false.
    // .indexOf() permet de retourner l'emplacement d'une valeur existante dans un tableau. Si elle n'existe pas, on aura -1
  }
  console.log(favorites);
  return (
    <View style={styles.container}>

      <Button title="Afficher les favoris" onPress={()=>{navigation.navigate('Favorite');}}/> 

      <Image source={require('./assets/uber-eats-logo.jpg')} style={{width: "100px", height: "100px", marginTop: "25px", marginBottom: "25px"}}/>
      
      <Text style={styles.title}>Voici les restaurants !</Text>
      
      <FlatList data={restaurants} renderItem={getAllRestaurants} keyExtractor={(item) => {return item.id}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  title: {
    fontSize: "25px"
  }
});