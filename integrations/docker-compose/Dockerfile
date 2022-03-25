FROM node:15-alpine

RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app

RUN npm install -g nodemon
RUN npm install

ENV PORT 8080

ENTRYPOINT ["nodemon", "/usr/app/server.js"]