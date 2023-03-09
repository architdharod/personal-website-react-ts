# Base image
FROM node:19-alpine3.17 AS build

# Set the working directory
WORKDIR /app

# Reset the workspace
RUN rm -rf node_modules/ && npm cache clean --force

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Set up Nginx
FROM nginx:alpine

# Copy the built React application to the server
COPY --from=build /app/dist /usr/share/nginx/html/

# Copy the Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]