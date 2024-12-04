# Builder
FROM --platform=linux/amd64 node:16 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Building
RUN npm run build

FROM nginx:1.21.1
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
