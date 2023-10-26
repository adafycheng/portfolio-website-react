FROM node:iron-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm ci --omit=dev
CMD ["npm", "run", "start"]