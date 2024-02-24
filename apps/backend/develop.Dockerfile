FROM node:18
WORKDIR /usr/src/app/

# RUN apt-get update && \
#     apt-get -qy full-upgrade && \
#     apt-get install -qy ffmpeg && \
#     apt-get install -qy curl && \
#     apt-get install -qy curl && \
#     curl -sSL https://get.docker.com/ | sh

# https://stackoverflow.com/questions/58134793/error-while-loading-shared-libraries-libnss3-so-while-running-gtlab-ci-job-to
# RUN apt-get update
# RUN apt-get -y install curl
# RUN apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget ca-certificates libgbm-dev

# Copying source files
COPY . .

# RUN npm install --arch=arm64 --platform=linuxmusl sharp
# RUN npm install --ignore-scripts=false --foreground-scripts --verbose sharp

# RUN npm install @ffmpeg-installer/ffmpeg
# RUN uname -m
# ENV FFMPEG_PATH /path/to/ffmpeg

# RUN npm install
# RUN npm run build

EXPOSE 1337

# Running the app
RUN ["chmod", "-R", "777", "/usr/src/app/public"]
RUN ["chmod", "+x", "/usr/src/app/develop.sh"]
ENTRYPOINT ["sh", "/usr/src/app/develop.sh"]