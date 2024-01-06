FROM node:18

WORKDIR /usr/src/app/

ARG DOCUMENTATION_GOOGLE_TAG_MANAGER_ID
ENV GOOGLE_TAG_MANAGER_ID=$DOCUMENTATION_GOOGLE_TAG_MANAGER_ID

# Installing dependencies
COPY package.json ./

# Copying source files
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000


# Running the app
RUN ["chmod", "-R", "777", "/usr/src/app"]
RUN ["chmod", "+x", "/usr/src/app/start.sh"]

CMD ["tail", "-f", "/dev/null"]