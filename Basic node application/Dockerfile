#install alpine version of node
FROM node:20.17.0-alpine3.19

WORKDIR /home/app/
 
# COPY package-lock.json package-lock.json
# COPY package.json package.json
COPY package*.json .

# Installing the dependencies
RUN npm install

# # Copying the source code to docker image
COPY index.js  index.js

# adding by default cmd
CMD ["node", "index.js"]

# old code
# # Base Image
# FROM ubuntu

# # update apt
# RUN apt-get update
# # Installing Curl
# RUN apt install -y curl

# # Installing NodeJS
# RUN curl -SL https://deb.nodesource.com/setup_20.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh I
# RUN apt install -y nodejs
# # Copying the source code to docker image
# COPY index.js /home/app/index.js
# COPY package-lock.json /home/app/package-lock.json
# COPY package.json /home/app/package.json

# # changing the working directory
# WORKDIR /home/app/
# # Installing the dependencies
# RUN npm install