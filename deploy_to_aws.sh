#!/usr/bin/env bash

# exit if any command fails
set -e

# Version key/value should be on its own line
VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Deploying version $VERSION"

image="web"
tag="blog_backend"
aws_tag="blog-backend-repository"
cluster="blog-backend-config"
tagged_image=436054152060.dkr.ecr.eu-central-1.amazonaws.com/${aws_tag}:${VERSION}

aws ecr get-login-password --region eu-central-1 | docker login \
    --username AWS \
    --password-stdin 436054152060.dkr.ecr.eu-central-1.amazonaws.com


echo "Building docker..."
docker build -f Dockerfile -t ${tag} . #--no-cache
docker tag ${tag}:latest ${tagged_image}

nginx_tag="nginx_blog_backend"
nginx_aws_tag="blog-nginx-repository"
nginx_tagged_image=436054152060.dkr.ecr.eu-central-1.amazonaws.com/${nginx_aws_tag}:${VERSION}
docker build -f nginx.Dockerfile -t ${nginx_tag} . --no-cache
docker tag ${nginx_tag}:latest ${nginx_tagged_image}

echo "Pushing to AWS..."
docker push ${tagged_image}
docker push ${nginx_tagged_image}

echo "Stopping currently running service..."
ecs-cli compose service --cluster-config ${cluster} stop

echo "Creating and starting service..."
TAGGED_IMAGE=${tagged_image} NGINX_IMAGE=${nginx_tagged_image} ecs-cli compose service --cluster-config ${cluster} up
