# Pull from a base image
FROM node:12

# Set the working directory.
WORKDIR /home/thomas/Documents/blog/blog_backend

# Copy the file from your host to your current location.
COPY package.json .

# Install dependencies (npm ci is similar to npm i, but for automated builds)
RUN yarn install

# Build production client side React application
RUN yarn build

# Listen on the specified port
EXPOSE 1337

# Set Node server
CMD ["yarn", "start"]

COPY . .