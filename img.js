/**
 * Les images s'utilisent à partir du composant Image
 *
 * Ce composant utiliser une props qui est source pour le chargement des images.
 * On a plusieurs solutions pour les intégrer :
 * - require()
 * exemple :       <Image source={require('./assets/uber-eats-logo.jpg')} style={{width: "100px", height: "100px"}}/>
 * 
 * - { uri: "https://www.test.fr/img.jpg" }
 * exemple :       <Image style={{width: "100px", height: "100px"}} source={{uri: "https://www.presse-citron.net/app/uploads/2020/06/uber-eats-logo.jpg"}} />
 * 
 * /!\ : Il est obligatoire de mettre du style sur l'image pour qu'elle apparaisse (width et height).
 *
 *
 * Il existe un composant ImageBackground permettant d'ajouter un fond à une partie de notre interface.
 * 
 */