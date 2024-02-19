FROM node:20.11.1-alpine3.18
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm ci --omit=dev
CMD ["npm", "run", "start"]