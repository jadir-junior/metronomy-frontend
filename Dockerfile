FROM node:16.13.2-alpine

RUN apk add --no-cache python2 g++ make

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm ci

CMD ["npm", "start"]