# Setup

If docker is not configured in your machine, execute first-setup.sh (Linux only) so that you can run `docker-compose` without issues

# Running

To run the project you need to:

1. Run all the three docker containers in the docker-compose
2. Install node dependencies with `npm install`
3. Run the vue-demo project with `npm run dev`

Remember to destroy the docker containers after running them with `docker-compose kill`, or there may be problems with other vagrant projects later

- Login: user1/user1

# Keycloak panel 

- Url: http://localhost:8082/auth
- Login: test/test
- Realm: test
- ClientId: test
