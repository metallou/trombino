//Petite aide pour maintenair le code

Il est prévu que chaque personne possède (dans le code) toutes les icones des réseaux sociaux (span class="iconRESAL" dans div class="iconsres")
Si une icone n'est pas utilisée (pas de compte associé à ce résal), elle doit avoir la class "unused" en plus de sa classe "iconRESAL" (ne pas oublier de l'ajouter ou de l'enlever en cas de modification)
Si une icone n'est pas utilisée, l'attribut 'href' de la balise <a> contenue dans le <span> (correspondant à l'icone) doit être supprimé

CELA DONNERA:
span class="iconRESAL unused"
a target="_blank" rel="external"
RESAL
/a
/span

AU LIEU DE:
span class="iconRESAL"
a target="_blank" rel="external" href="https://www.siteduresal.com"
RESAL
/a
/span


Il est prévu que chaque personne possède (dans le code) tous les icones des compétences (span class="iconSKILL" dans div class="iconsskills")
Si une icone n'est pas utilisée (compétence non maitrisée), elle doit avoir la class "unused" en plus de sa classe "iconSKILL" (ne pas oublier de l'ajouter ou de l'enlever en cas de modification)

CELA DONNERA:
span class="iconSKILL unused"
SKILL
/span

AU LIEU DE:
span class="iconSKILL"
SKILL
/span

Il est prévu que chaque personne possède (dans le code) les deux champs téléphone et mail en couple "icon"/"text"
Si une des informations "text"(pho/mail)n'a pas été renseignée, laisser le bloc (même vide) dans le code
Les ids des blocs doivent toujours respecter les expressions régulières suivantes:

"textXXpho" pour l'icone du téléphone
"textXXmai" pour l'icone du mail
"textXXphon" pour le texte du téléphone
"textXXmail" pour le texte du mail
XX doit être entre 00 et 99 (permettant cent personnes)

Si plus de cent personnes devaient exister, passer tous les nombres XX de 2 à 3 digits (ex: 12-> 012)
Egalement (dans js/phomail.js), changer tous les 'substr(0,6)' en 'substr(0,7)'

Il est prévu qye chaque personne possède (dans le code) deux éléments p class="texttext" et deux éléments p class="textquote"
SI un des champs devait ne pas être rempli, laisser le bloc vide dans le code
(ps: les deux blocs <p> partageant la même classe n'ont pas obligation à avoir le même contenu)


Tovaritch README pas d'accord avec retour à la ligne, obligé faire texte pas beau
