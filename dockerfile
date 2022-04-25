FROM node:alpine3.15
COPY . .
RUN apk add --update nodejs npm
RUN npm ci
ENTRYPOINT ["sh"]
