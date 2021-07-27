# Build part
FROM node:12-alpine as build

WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run build:production

# Serve part
FROM nginx:alpine

WORKDIR /var/www/web

COPY --from=build /src/dist .
