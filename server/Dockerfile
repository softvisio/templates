FROM softvisio/core

RUN \
    # setup node build environment
    curl -fsSL https://bitbucket.org/softvisio/scripts/raw/master/env-build-node.sh | /bin/bash -s -- setup \
    \
    # install deps
    && npm i --no-fund --omit=dev \
    \
    # build app
    && pushd app \
    && npm i --no-fund \
    && npm run build \
    && rm -rf .[!.]* !(www) \
    && popd \
    \
    # cleanup node build environment
    && curl -fsSL https://bitbucket.org/softvisio/scripts/raw/master/env-build-node.sh | /bin/bash -s -- cleanup \
    \
    # clean npm cache
    && rm -rf ~/.npm-cache
