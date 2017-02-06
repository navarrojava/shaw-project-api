#Projeto de apresentaçao - Shaw And Partners

##Running project


```
#!ssh


 $ npm install -g nodemon 
 $ cd path-to-project
 $ npm install 
 $ npm start 
```
 
 
 
###scripts
####start : start server (without any api-token configured)
####start-hot : start server (without any api-token configured), with live reload. (need nodemon installed)



###Security API
if argument `api-token` be passed on startup server, this will require that the consumer pass though http header the key `api-token` and the value specified on the args,
if no one value be passed, the server will assume that no will block any request.
 e.g:
 

```
#!ssh

 $ cd path-to-project
 $ npm start -- --api-token=the_most_security_api_token_of_the_world
```

 
 

###### Navarro Ferreira