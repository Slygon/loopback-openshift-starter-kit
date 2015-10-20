# loopback-openshift-starter-kit
A ready loopback v2 app, meant to be run on Openshift with MongoDB Cartridge


1. Download openshift code (nodejs app) to your app folder
2. configure the env vars (USERNAME is probably "admin", PASSWORD is written in cartridge details): 

  #####rhc env set "OPENSHIFT_MONGODB_DB_USERNAME"="USERNAME" -a myapi
  
  #####rhc env set "OPENSHIFT_MONGODB_DB_PASSWORD"="<PASSWORD>" -a myapi
  
3. Put the source from this repo in the app folder
4. cd in to app folder
5. run these commands:

  #####git add --all && git commit -am "Added initial loopback files"

  #####git push origin master

You can also tail the app to see what's happening:
rhc tail -a <YOUR_APP>

also, you can use RockMongo cartridge to see if any collections have been added to the database by loopback.
