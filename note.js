/**
 * React Native : framework qui permet de créer des applications natives (à partir du Javascript ou du TypeScript)
 * 
 * React Native est apparu en mars 2015 (Facebook)
 * 
 * On a deux manières de créer un projet React Native :
 * 
 * - Expo CLI (Expo va nous permettre une installation simplifiée de React Native et Expo nous propose un ensemble de bibliothèque pour repousser les limites de React Native).
 * - React Native CLI 
 * 
 * Notre projet React Native n'utilise plus de CSS ni de HTML.
 * 
 * On n'a plus de fichier index.js, App.js est désormais le composant principal de notre application. 
 * 
 * On a plus de balise HTML. React Native va nous proposer des composants cores qui vont nous permettre de créer nos interfaces. 
 * 
 * Trois types de composant dans React Native :
 * - composants cores (Text, View, FlatList, TextInput, ScrollView...), ils remplacent les balises HTML.
 * - composants natives (Nos composants, les composants que l'on va créer : Touit.js, Movie.Js)
 * - composants communities (Composants de la communauté, composant au sein de bibliothèque externe)
 * 
 * 
 * View qui va permettre de structurer notre interface à partir de vue. 
 * Text qui va permettre de gérer les textes (on a plus de h1, h2, p...)
 * 
 * 
 * 
 * 
 * 
 * 
 * npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
 * Par défaut les webpack pour le web ne sont plus installés avec expo, il faudra donc saisir la commande ci-dessus si on veut pouvoir travailler avec un navigateur. 
 * 
 * On peut afficher notre application sur le navigateur dans un premier temps, mais je vous le déconseille sur le long terme. Beaucoup d'éléments fonctionneront sur navigateur et non pas sur smartphone. Les éléments natifs (statusbar, les touches de navigation) du smartphone n'apparaissent sur navigateur.
 * 
 * 
 * 
 * Dans la doc de React native, il y a des points à côté des props :
 * - point rouge : props obligatoire
 * - point vert : props qui ne fonctionne qu'avec Android
 * - point noir : props qui ne fonctionne qu'avec IOS 
 */