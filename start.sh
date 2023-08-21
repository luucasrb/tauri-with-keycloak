#!/bin/sh

# Remember to use docker-compose kill after leaving the project
sudo docker-compose kill

# Pull may not work depending on the environment. Try using docker pull individually if needed
sudo docker-compose pull

# Sometimes database doesn't work. Try loading it by itself if that happens
sudo docker-compose stop database
sudo docker-compose rm -f  database
sudo docker-compose up -d database
sleep 5
sudo docker-compose stop keycloak
sudo docker-compose rm -f  keycloak
sudo docker-compose up -d keycloak
sleep 15

# Create user1/user1 for the interface login
docker exec keycloak /opt/jboss/keycloak/bin/add-user-keycloak.sh -r test -u user1 -p user1
docker exec keycloak /opt/jboss/keycloak/bin/jboss-cli.sh --connect command=:reload