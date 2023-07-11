FROM node:20.2-alpine3.16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm ci --production
CMD ["npm", "run", "start"]