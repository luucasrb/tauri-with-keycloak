#Install snap and its dependencies
sudo apt update
sudo apt install snapd

#Install docker
sudo snap install docker

#Allow user to use docker functionalities
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
