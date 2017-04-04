FROM node:6-alpine

WORKDIR /usr/src/app
COPY . .

RUN node -v && \
    npm -v && \
    yarn --version

RUN yarn