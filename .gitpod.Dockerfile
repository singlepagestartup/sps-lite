FROM gitpod/workspace-node

RUN curl -fsSL https://bun.sh/install | bash
RUN apt-get update && sudo apt-get install -y netcat-traditional