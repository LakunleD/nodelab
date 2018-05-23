FROM node:carbon

RUN mkdir -p /user/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g pm2

ENV MONGODB_URL=mongodb://127.0.0.1:27017/nodekb


COPY . /usr/src/app
EXPOSE 3000
CMD ["pm2-docker", "start", "app.js" ]
