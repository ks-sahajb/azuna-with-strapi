FROM node:22.13.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1337

ENV NODE_ENV=development

CMD ["npm", "run", "develop"]
