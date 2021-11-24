FROM node:12-alpine As development
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g ts-node
RUN npm install
COPY . .
CMD [ "npm","start"]