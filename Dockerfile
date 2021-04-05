# Check out https://hub.docker.com/_/node to select a new base image
FROM node:12-alpine

ARG NODE_ENV=staging
ENV NODE_ENV=${NODE_ENV}
ARG DATASOURCE_COMMUNITY_HOST=host
ENV DATASOURCE_COMMUNITY_HOST=${DATASOURCE_COMMUNITY_HOST}
ARG DATASOURCE_COMMUNITY_PORT=3306
ENV DATASOURCE_COMMUNITY_PORT=${DATASOURCE_COMMUNITY_PORT}
ARG DATASOURCE_COMMUNITY_USER=medistream
ENV DATASOURCE_COMMUNITY_USER=${DATASOURCE_COMMUNITY_USER}
ARG DATASOURCE_COMMUNITY_PASSWORD=password
ENV DATASOURCE_COMMUNITY_PASSWORD=${DATASOURCE_COMMUNITY_PASSWORD}
ARG DATASOURCE_COMMUNITY_DATABASE=medistream
ENV DATASOURCE_COMMUNITY_DATABASE=${DATASOURCE_COMMUNITY_DATABASE}
ARG DATASOURCE_CEZERIN_URL=mongodb
ENV DATASOURCE_CEZERIN_URL=${DATASOURCE_CEZERIN_URL}

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./

RUN npm install

# Bundle app source code
COPY --chown=node . .

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
