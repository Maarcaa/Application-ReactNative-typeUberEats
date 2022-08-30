/**
 * On parle de zone de pression
 * 
 * On a plusieurs composants pour la pression : 
 * - <Button /> : il a deux props obligatoires 'title' et 'onPress'. Le gros défaut du bouton c'est le fait qu'il n'est pas de props style.
 * On l'utilisera plus dans des cas simplistes.
 * <Button title="Pression" onPress={()=>{}}/>
 * 
 * - <TouchableHighlight> <TouchableOpacity > <TouchableWithoutFeedBack > : Les composants Touchable vont englober des zones de l'écran pour ajouter une pression. De plus, on peut utiliser la props style sur ces zones.
 * 
 * La différence entre les trois c'est le système d'animation.
 * 
 * - <Pressable> </Pressable>
 * Ce composant a tous les intérêts que proposent les composants Touchable, avec une spécificité supplémentaire : on a plusieurs type de pression (longue pression, lorsque le doigt est posé, lorsque le doigt est retiré...)
 */