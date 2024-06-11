FROM gitpod/workspace-node

USER gitpod

RUN curl -fsSL https://bun.sh/install | bash
RUN sudo apt-get update && apt-get install -y netcat-traditional