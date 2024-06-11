FROM node:20

RUN apt-get update && \
    apt-get -qy full-upgrade && \
    apt-get install -qy curl && \
    curl -sSL https://get.docker.com/ | sh

WORKDIR /usr/src/app/

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL

ARG NEXT_PUBLIC_FRONTEND_URL
ENV NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL

ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN

ARG TELEGRAM_BOT_USERNAME
ENV TELEGRAM_BOT_USERNAME=$TELEGRAM_BOT_USERNAME

# Copying source files
COPY . .

# write the env variables to a file
RUN if [ -n "$NEXT_PUBLIC_BACKEND_TOKEN" ]; then echo "NEXT_PUBLIC_BACKEND_TOKEN=$NEXT_PUBLIC_BACKEND_TOKEN" >> /usr/src/app/apps/frontend/.env.production; fi
RUN echo "NEXT_PUBLIC_FRONTEND_URL=$NEXT_PUBLIC_FRONTEND_URL" >> /usr/src/app/apps/frontend/.env.production

# if NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID exists, write it to the .env file
RUN if [ -n "$NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID" ]; then echo "NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=$NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID" >> /usr/src/app/apps/frontend/.env.production; fi

# if NEXT_PUBLIC_SENTRY_DSN exists, write it to the .env file
RUN if [ -n "$NEXT_PUBLIC_SENTRY_DSN" ]; then echo "NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN" >> /usr/src/app/apps/frontend/.env.production; fi

# if TELEGRAM_BOT_USERNAME exists, write it to the .env file
RUN if [ -n "$TELEGRAM_BOT_USERNAME" ]; then echo "NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=$TELEGRAM_BOT_USERNAME" >> /usr/src/app/apps/frontend/.env.production; fi

RUN npm ci
RUN npm run frontend:build

EXPOSE 3000

# Running the app
RUN ["chmod", "-R", "777", "/usr/src/app"]
RUN ["chmod", "+x", "/usr/src/app/start.sh"]
RUN ["chmod", "-R", "777", "/usr/src/app/apps/frontend/public"]

CMD ["tail", "-f", "/dev/null"]