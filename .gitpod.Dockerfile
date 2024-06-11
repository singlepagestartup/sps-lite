FROM gitpod/workspace-node

RUN curl -fsSL https://bun.sh/install | bash
RUN apt-get update && apt-get install --no-install-recommends -y netcat-traditional