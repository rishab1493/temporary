
FROM node:18


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


RUN npm install -g nodemon ts-node


COPY . .


EXPOSE 5000


CMD ["npm", "run", "dev"]
