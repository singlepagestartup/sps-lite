FROM node:18

RUN apt-get update && \
    apt-get -qy full-upgrade && \
    apt-get install -qy curl && \
    apt-get install -qy curl && \
    curl -sSL https://get.docker.com/ | sh

WORKDIR /usr/src/app/

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

ARG NEXT_PUBLIC_BACKEND_TOKEN
ENV NEXT_PUBLIC_BACKEND_TOKEN=$NEXT_PUBLIC_BACKEND_TOKEN

ARG NEXT_PUBLIC_FRONTEND_URL
ENV NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL

ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN

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
RUN ["chmod", "+x", "/usr/src/app/build-start.sh"]
RUN ["chmod", "+x", "/usr/src/app/build-static-icp.sh"]

CMD ["tail", "-f", "/dev/null"]