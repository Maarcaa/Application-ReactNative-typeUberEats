/**
 * Le style avec React Native
 * 
 * On ne parle plus vraiment de CSS
 * 
 * On va utiliser une props qui s'appelle style.
 * La props va pouvoir contenir plusieurs types d'éléments : 
 * - On va pouvoir utiliser l'API StyleSheet qui permet principalement de créer des feuilles de style à l'aide de la méthode create.
 * On importe l'API, on utilise la méthode create, qui contient un objet javascript contenant lui même nos différentes "class".
 * 
 * Stylesheet.create sera stocké dans une constante, on appelera la constante dans les composants où on veut appliquer le style. Pour cela, on utilisera une props appelée style.
 * 
 * On peut ajouter autant de class que l'on veut à l'aide d'un tableau.
 * 
 * Les composants enfants n'héritent pas des composants parents en terme de Style.
 * 
 * - Il est possible d'ajouter directement du style à travers les composants : 
 * exemple : <Text style={{fontSize: "15px"}}></Text>
 * 
 * Certains composants ne peuvent pas avoir de style.
 */