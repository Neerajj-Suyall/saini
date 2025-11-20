# Dockerfile (multi-stage) - build with node, serve with nginx
# Place this at repository root

### Stage 1: build
FROM node:20-alpine AS build
WORKDIR /app
# copy package manifests first for caching
COPY package*.json ./
# if you use yarn, change to yarn install
RUN npm ci
COPY . .
# build - for CRA: "npm run build" produces /app/build
RUN npm run build

### Stage 2: serve with nginx
FROM nginx:stable-alpine
# Remove default conf and add a simple SPA conf
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/spa.conf

# Copy built assets from builder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port Render expects (Render exposes web service port automatically)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
