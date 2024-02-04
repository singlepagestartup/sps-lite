FROM node:18
WORKDIR /usr/src/app/

COPY . .

EXPOSE 3000

# Running the app
RUN ["chmod", "-R", "777", "/usr/src/app"]
RUN ["chmod", "+x", "/usr/src/app/develop.sh"]
ENTRYPOINT ["sh", "/usr/src/app/develop.sh"]