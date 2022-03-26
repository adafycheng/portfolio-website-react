FROM node:17-alpine3.15
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm ci --production
CMD ["npm", "run", "start"]