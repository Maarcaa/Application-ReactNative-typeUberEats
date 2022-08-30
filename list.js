/***
 * Pour gérer les systèmes de liste dans React Native, on a plusieurs composants possibles : 
 * - FlatList : permet de gérer une liste de données (basiques)
 * - SectionList : permet de gérer une liste de données avec des sections. On va trier les données par catégorie.
 * - VirtualizedList : permet de gérer une liste de données de manière plus optimisée. Cette liste va nous permettre d'obtenir une influence positive sur la mémoire utilisée et les performances autours de l'application (Il y aura beaucoup plus d'informations obligatoires lors de son utilisation).
 * 
 * On n'utilise plus le système de fonction .map() avec React Native.
 * 
 * 
 * //////////////
 * // FlatList //
 * //////////////
 * 
 * props :
 * - data : on va lui donner la liste des données (exemple : restaurants)
 * - renderItem : on lui donne une fonction qui va boucler sur les données et retourner pour chaque élément un composant (exemple : le composant Restaurant)
 * - keyExtractor : on lui donne une fonction qui retournera l'id unique de nos restaurants (c'est l'équivalent du props key en React.js).
 * 
 */