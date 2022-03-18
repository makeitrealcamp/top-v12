FROM node:14

LABEL maintainer "Goye"

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y make gcc build-essential

RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app

RUN yarn

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]


