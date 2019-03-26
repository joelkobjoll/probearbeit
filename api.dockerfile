FROM node:10.9-slim

RUN apt-get -y update
RUN apt-get install python -y
RUN yarn global add nodemon -g

RUN mkdir /api
WORKDIR /api

COPY ./api/*.js /api/
COPY ./api/*.json /api/
COPY ./api/*.lock /api/