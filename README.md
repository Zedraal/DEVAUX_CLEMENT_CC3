**Question 1.1 donner la liste des en-têtes de la réponse HTTP du serveur.**

HTTP/1.1 200 OK
Date: Fri, 22 Sep 2023 06:13:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked

**Question 1.2 donner la liste des en-têtes qui ont changé depuis la version précédente.**

HTTP/1.1 200 OK
Content-Type: application/json
Date: Fri, 22 Sep 2023 06:18:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 20

**Question 1.3 que contient la réponse reçue par le client ?**

il n'y a pas de réponse 

**Question 1.4 quelle est l'erreur affichée dans la console ? Retrouver sur https://nodejs.org/api le code d'erreur affiché.**

Server is running on http://localhost:8000
[Error: ENOENT: no such file or directory, open 'C:\Users\user\Desktop\2023\cours\DevWeb\TP5\index.html'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\user\\Desktop\\2023\\cours\\DevWeb\\TP5\\index.html'
}

**Question 1.5 donner le code de requestListener() modifié avec gestion d'erreur en async/await.**

Server is running on http://localhost:8000
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:405:5)
    at ServerResponse.setHeader (node:_http_outgoing:648:11)
    at file:///C:/Users/user/Desktop/2023/cours/DevWeb/TP5/server-http.mjs:11:16 {
  code: 'ERR_HTTP_HEADERS_SENT'
}
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:405:5)
    at ServerResponse.setHeader (node:_http_outgoing:648:11)
    at file:///C:/Users/user/Desktop/2023/cours/DevWeb/TP5/server-http.mjs:11:16 {
  code: 'ERR_HTTP_HEADERS_SENT'
}

on peut voir que pour la premiere partie de la réponse mon code affecte bien l'erreur avec le lancement du serveur 

une fois le code avec async/await modifier le serveur m'affiche bien un hello again
this is served from a file 

**Question 1.6 indiquer ce que cette commande a modifié dans votre projet**

PS C:\Users\user\Desktop\2023\cours\DevWeb\TP5> npm install cross-env --save

added 7 packages, and audited 8 packages in 1s

found 0 vulnerabilities
PS C:\Users\user\Desktop\2023\cours\DevWeb\TP5> npm install nodemon --save-dev

added 33 packages, and audited 41 packages in 2s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

les modification du au commande m'on ajouter un package-lock.json et un node_modules dans mon fichier TP5 

**Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?**

[nodemon] restarting due to changes...
[nodemon] starting `node server-http.mjs`
NODE_ENV = development
Server is running on http://localhost:8000

la différence majeur est l'utilisation du nodemon pour le dev et du node pour la production du a cela on va avoir deux version distictes du meme serveur qui sont comme le miroir l'un de l'autre 

**Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes.**

200 ok 
200 ok
404 not found
404 not found


**Question 2.1 donner les URL des documentations de chacun des modules installés par la commande précédente**

**Question 2.2 vérifier que les trois routes fonctionnent.**
les routes fonctionnent bel est bien 

**Question 2.3 lister les en-têtes des réponses fournies par Express. Lesquelles sont nouvelles par rapport au serveur HTTP ?**
http://localhost:8000
HTTP/1.1 200 OK
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Fri, 22 Sep 2023 06:32:43 GMT
ETag: W/"380-18abb973604"
Content-Type: text/html; charset=UTF-8
Content-Length: 896
Date: Wed, 27 Sep 2023 06:57:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5

http://localhost:8000:/
HTTP/1.1 200 OK
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Fri, 22 Sep 2023 06:32:43 GMT
ETag: W/"380-18abb973604"
Content-Type: text/html; charset=UTF-8
Content-Length: 896
Date: Wed, 27 Sep 2023 06:59:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

**Question 2.4 quand l'événement listening est-il déclenché ?**

il se lance au moment du lancement du serveur 

**Question 2.5 indiquer quelle est l'option (activée par défaut) qui redirige / vers /index.html ?**

c'est le express.static() avec l'option index qui est activé par default 

**Question 2.6 visiter la page d'accueil puis rafraichir (Ctrl+R) et ensuite forcer le rafraichissement (Ctrl+Shift+R). Quels sont les codes HTTP sur le fichier style.css ? Justifier.**

premier chargement je suis en 200 sur le style.css et apres le premier 
CTRL+R je suis en 304 sur le style.css et apres le Ctrl+Shift+R je suis en 200 sur le style.css.

**Question 2.7 vérifier que l'affichage change bien entre le mode production et le mode development.**

il change bien puisque je recupere 
GET / 304 5.245 ms - -
GET /style.css 304 0.829 ms - -

quand je passe en mode production 
