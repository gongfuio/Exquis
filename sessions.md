session 12 juillet 2012:
------------------------

exploration de l'api canvas:

2 canvas utilisés pour cette session. 
Le premier, CanvasLeft, génére un motif animé.
Le second, CanvasRight, reçoit les pixels de la première ligne du CanvasLeft, et produit
sa propre représentation avec cette information.


session 19 juillet 2012:
------------------------

modularisation de l'entité animation. 
Exploration des différents patterns de création d'objets.
session à 3 (Olivier en guest star).


session 26 juillet 2012:
------------------------

objectifs: faire fonctionner la page de cases avec le nouvel objet.
introduire un objet "dashboard".

réalisation: 
session à 3 (Thanks Olivier)
simplifier l'objet animation
création d'une grille de 2 x 2 canevas
communication simple des bordures entre les canevas.


session 2 aout 2012:
--------------------

grille de 3 x 3 canevas.

système d'enchaînement d'animations

discussion sécurité du context d'évaluation. (voir solution iframe cf jsfiddle)


session 9 aout 2012:
-------------------

structure de données pour les animations.
généralisation du système de communication des bordures.


session 16 aout 2012:
---------------------

comprendre le très joli bug pour le reproduire délibérement.

pourquoi TR  copie t'il le bord nord au lieu du bord ouest ?


session 23 aout 2012:
---------------------

implémentation du live coding pour la case du milieu.

bug sur la mise à jour de la fonction draw, quand la string est incorrecte.


session 30 aout 2012:
---------------------

correction du bug du 23.
visualisation de la validité du code.
refactor du mécanisme de mise à jour du code évalué.


session 7 septembre 2012:
-------------------------

live coding pour toutes les cellules.

rajouté serveur statique (node.js)


session 13 septembre 2012
-------------------------

session en remote gung-fu (Skype + TeamViewer)
charger les définitions des animations via le serveur (json)


session 20 septembre 2012
-------------------------

annulé


session 27 septembre 2012
-------------------------

(use nodemon to monitor code changes on node app: npm install nodemon -g)

refactor du loading des jsons vers une version async.
création du fichier animation "copieBordSud.json"


session 4 octobre 2012
----------------------

continuer à traduire les animations sous formes de json servies par le serveur
définir un assemblage d'animations sous forme de json sur le serveur.

...
enregistrer les modifications au code d'animations


session 11 octobre 2012
-----------------------

rendre possible l'édition des 9 cases.


session 18 octobre 2012
-----------------------

définir un assemblage d'animations sous forme de json sur le serveur,
et permettre la sauvegarde du code modifié en ligne.


session 25 octobre 2012
-----------------------

permettre la sauvegarde du code modifié en ligne.


session 1 novembre 2012
-----------------------

TODOs:
réorganiser le code.
onRollOver sur les cases on voit les limites des cases.
onClick (sélection) sur une case, apparition des textArea si invisible et surbrillance sur l
case pour indiquer son statut de case sélectionnée.
onClick sur l'extérieur des cases, déactivation de la surbrillance et disparition des text areas.


session 8 novembre 2012
-----------------------

continuer la réorganisation du code

débuger le comportement du rollOver

onClick (sélection) sur une case, apparition des textArea si invisible et surbrillance sur l
case pour indiquer son statut de case sélectionnée.
onClick sur l'extérieur des cases, déactivation de la surbrillance et disparition des text areas.


session 15 novembre 2012
-----------------------

continuer la réorganisation du code

bug fix


session 22 novembre 2012
-----------------------

code reorganisation. cell renamed to canvasAnimation. new Cell object contains a canvasAnimation 
and a hint. This is done to allow easier association of canvasAnimation and Hint for adding css classes
on click handlers (edit and onBodyClick).

session 29 novembre 2012
------------------------

code reorganisation. 
have fun creating test animations.


session 6 décembre 2012
-----------------------

réorganisation de code (extract make text area).
commencer animation qui réagit à son voisin.
lire assemblage depuis l'url.


session 22 décembre 2012
------------------------

réorganisation de code.
animation qui réagit à son voisin suite et fin.


session 27 décembre 2012
------------------------

réorganisation de code.
permettre le chargement d'une animation à partir d'une liste provenant du serveur.
permettre la sauvegarde d'un assemblage d'animations.


session 3 janvier 2013
----------------------

filePicker modal gui.

reste à charger l'animation sélectionnée (WIP)
extraire les requêtes serveur de l'éditeur.


session 24 février 2013
----------------------
finir le filepicker et la fonctionalité "load cell"


session 7 février 2013
----------------------

refactoring avec require.js


session 14 février 2013
-----------------------

fix bug qui apparaît sur le click du bouton load

améliorer l'apparence: travail sur le dialogue modal.

session 21 février 2013
-----------------------

bug fix
mise en place de tests avec PhantomJS


session 28 février 2013
-----------------------

rajout tests fonctionnels


session 7 mars 2013
-------------------

découvert mocha et chai


session 14 mars 2013
--------------------

pour faciliter les test fonctionnels:
conversion du "prompt" window en dialog modal implémenter dans le dom


session 2 mai 2013
------------------
échec de la mise en place des tests fonctionnels avec webdriverjs

session 9 mai 2013
-------------------
changer la stratégie pour les tests fonctionnels:
i.e. réaliser les tests in situ dans le browser.
une méthode "test" essaye d'injecter un tag script comportant
le code des tests. Un flag côté serveur délivre le fichier si
un flag debug est présent.



session 6 juin 2013
-------------------
premiers tests
mise en place d'un mock pour les sauvegardes (module net)


session 13 juin 2013
-------------------

tester la sauvegarde

exploration des promesses pour permettre un test dont l'assertion est asynchrone


session 20 juin 2013
-------------------

tester la sauvegarde

utiliser la librairie Q pour permettre des tests asynchrone

fixer la largeur du hover sur le mot le plus long dans le dialog modal.
améliorer l'apparence.
rendre possible la sauvegarde d'un assemblage d'animations.


session 27 juin 2013
--------------------

rajout des boutons pour gérer la sauvegarde des assemblages.


session 18 juillet 2013
----------------------

saveAssemblage, saveAssemblageAs

session 25 juillet 2013
-----------------------

loadAssemblage, focus sur ecran modal


session 31 juillet 2013
-------------------

créer une nouvelle animation

créer todo.org

session 8 aout 2013
-------------------

fixer le bug "reference error"

refactorer Readme.md


