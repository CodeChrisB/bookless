FROM node:latest
WORKDIR /usr/app/
COPY package.json .
RUN npm install -g nodemon
RUN npm install --quiet
RUN npm install express
RUN npm install -D ts-node
RUN npm install -D typescript  @types/express @types/node 
COPY . .