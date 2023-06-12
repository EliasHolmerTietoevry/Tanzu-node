# Stage 1
FROM node:16-alpine AS compile-image
WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2
FROM node:16-alpine
WORKDIR /app

COPY --from=compile-image /app/package*.json ./
RUN npm install
COPY --from=compile-image /app .
EXPOSE ${PORT}

CMD [ "npm", "start" ]