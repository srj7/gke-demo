# Builder stage
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app code
COPY . .

RUN npm run build

# Deploy image
FROM node:18-slim

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 8080

CMD ["npm", "run", "start"]
