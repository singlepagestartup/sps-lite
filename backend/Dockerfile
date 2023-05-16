FROM node:18
WORKDIR /usr/src/app/

# Installing dependencies
COPY package.json ./

# Copying source files
COPY . .

RUN npm install
RUN npm run build

EXPOSE 1337

# Running the app
RUN ["chmod", "-R", "777", "/usr/src/app/public"]
RUN ["chmod", "+x", "/usr/src/app/start.sh"]
ENTRYPOINT ["sh", "/usr/src/app/start.sh"]