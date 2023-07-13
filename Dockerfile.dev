# Fetching the latest node image on alpine linux
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /the-news-pages

# Installing dependencies
COPY ./package.json /the-news-pages
RUN yarn install


# Copying all the files in our project
COPY . .
RUN yarn build

# Starting our application
CMD yarn runs
