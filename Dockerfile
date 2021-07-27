# Build part
FROM node:12-alpine as builder

WORKDIR /var/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . .

RUN npm run build:production

# Serve part
FROM nginx:alpine

WORKDIR /var/www/web

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /var/app/dist .
