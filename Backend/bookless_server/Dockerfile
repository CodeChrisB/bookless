FROM node:latest
WORKDIR /usr/app/
COPY package.json .
RUN npm install -g nodemon
RUN npm install ts-postgres
RUN npm install --quiet
RUN npm install express
RUN npm install -D ts-node
RUN npm install pg-promise
RUN npm install -D typescript  @types/express @types/node winston
RUN npm install inversify inversify-express-utils reflect-metadata --save
COPY . .