# Step 1: Build the React app using Yarn
FROM node:16-alpine as builder

# Set working directory
WORKDIR /app

# Copy both package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Step 2: Serve the React app with Nginx
FROM nginx:1.23-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx index page
RUN rm -rf ./*

# Copy built assets from the previous stage
COPY --from=builder /app/build .

# Expose port 80
EXPOSE 80

# Start Nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]
