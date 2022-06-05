#! /bin/bash

set -e -x

SCRIPT_DIR=$(dirname $(realpath $0))
cd $SCRIPT_DIR/..

REPO=deltafi-homepage
docker build -t ${REPO}:${TAG} --platform linux/arm64 --build-arg build_command=${BUILD_COMMAND} .
docker tag ${REPO}:${TAG} ${REGISTRY}/${REPO}:${TAG}
docker push ${REGISTRY}/${REPO}:${TAG}
