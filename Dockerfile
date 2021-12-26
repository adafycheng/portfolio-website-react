FROM node:17-alpine3.14
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm ci --production
#RUN npm i
CMD ["npm", "run", "start"]