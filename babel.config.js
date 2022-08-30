module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// Moteur Javascript
// On va pouvoir utiliser les versions de javascript les plus récentes.
