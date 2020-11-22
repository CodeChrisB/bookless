FROM node:latest
WORKDIR /usr/app
COPY package.json .
RUN npm install -g nodemon
RUN npm install --quiet
COPY . .
# dev
CMD [ "nodemon", "server.js" ]