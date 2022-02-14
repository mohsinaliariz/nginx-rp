FROM node:12.20.0
ENV NODE_ENV dev

WORKDIR /usr/experiences

# Create a layer only with dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Copy the source code
COPY . .

EXPOSE 5004
CMD [ "yarn", "start" ]