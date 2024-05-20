FROM gitpod/workspace-full

RUN apt-get update
RUN apt-get -y install curl
RUN curl -fsSL https://bun.sh/install | bash