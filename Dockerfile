
# Step 1
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn start

# Step 2 : server with Nginx

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]