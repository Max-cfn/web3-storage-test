# web3-storage-test

premier test de paramètrage et d'initilisation d'envoi de fichier sur web3


étapes

-dl les fichiers

-créer l'api token en allant sur https://web3.storage/account/  (onglet account - Api tokens)

-préparer l'upload : entrer dans un terminal ou npm et node sont installés :
  -> node put-files.js --token=<api token que vous avez créé> + chemin des fichiers que vous voulez upload
  
 la commande va vous donner un résultat avec un CID
  
 le CID est a conserver pour pouvoir visionner le fichier via l'interface IFPS 
  
 pour visionner  : https://dweb.link/ipfs/ + CID
 
 vous pouvez aussi consuter les différents CID pour vos fichiers dans l'interface de votre compte web3
  
  
