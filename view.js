/**
 * Il existe un ensemble de composant vue : 
 * 
 * - View : on s'en servira de container principal pour découper notre interface.
 * 
 * - KeyboardAvoidingView : Ce composant permet de gérer un problème bien connu des claviers sur smartphone, le fait qu'il se surpose à l'application. 
 * Avec le composant, on pourra décider du comportement du clavier par rapport à notre application.
 * /!\ On utilisera la props behavior pour gérer le comportement.
 * 
 * - ScrollView : Ce composant permet d'avoir une vue avec un scroll. 
 * /!\ FlatList permet automatiquement d'avoir un scroll.
 * 
 * - SafeAreaView : permet de résoudre des problèmes d'affichage des vues sur IOS 11 et +. On ajoute le composant dans App.js et on lui donne la propriété de style "flex: 1"
 */