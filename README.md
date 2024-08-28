# Résumé de l'API 

L'API réalisée avec node.js et express.js
C'est une API REST qui permet de pour répondre à des requêtes GET, pour récupérer un questionnaire personnalisé en fonction des besoins numériques d'une entreprise. Elle génère un résultat basé sur les réponses à ce questionnaire et propose des profils de freelances correspondant aux besoins identifiés.



## Lancer l'API en local


1. Faire un `git clone https://github.com/Boubacarkonate/apiRestTalentMatch.git`
2. Installez les `node_modules` avec `yarn`
3. Faites tourner l'API avec `yarn start`
4. Lancer `http://localhost:8000/`


## Consommer l 'API

Une fois lancée, cette API met plusieurs routes à disposition :

- La route pour récupérer les profils des freelances :
`GET /freelances`

- La route pour avoir le questionnaire :
`GET /survey/`

- La route pour obtenir le résultat du questionnaire :
`GET /results/?a1={answer1}&a2={answer2}&a3={answer3}...`


