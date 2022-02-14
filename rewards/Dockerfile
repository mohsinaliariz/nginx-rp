FROM node:12.20.0

WORKDIR /usr/rewards

# Create a layer only with dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build Resources
RUN npm run build

EXPOSE 5002
CMD ["sh", "-c", "npm start"]
