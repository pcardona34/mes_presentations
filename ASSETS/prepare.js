/*
 *  Prépare.js
 * 
 *  Permet de récupérer la source en markdown pour l'injecter dans le fichier de présentation
 *  où elle sera interprétée au moyen du script Remark.js
 * 
 */

// Récupération du paramètre "source" : d'après MSDN
function obtenirParametre(sVar) {
  //local url = window.location.search.replace(/&amp/,"&");
  //return unescape(url.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	
  //return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?|&amp;\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var niveau = obtenirParametre('niveau');
var source = obtenirParametre('source');
if (!source || !niveau) {
	alert("Syntaxe : https://votre_serveur/presentations/presentation.html?niveau=niveau&source=nom pour charger la presentation 'nom.md' dans le niveau 'niveau'.");
}
else
    {
	var ref = 'SOURCE/' + niveau + '/' + source + '.md';
	var slideshow = remark.create({
	 sourceUrl: ref
      });
}
