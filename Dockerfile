FROM node:16.13.2-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start:dev:docker"]