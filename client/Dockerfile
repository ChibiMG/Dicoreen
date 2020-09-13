# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli@7.3.9
COPY package.json .
RUN npm install 

# start app
CMD ng serve --host 0.0.0.0 --disable-host-check
