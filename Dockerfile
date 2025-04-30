# Build stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose both Vite and Storybook ports
EXPOSE 5173 6006

# Fix potential Windows line endings and make script executable
RUN cat start.sh | tr -d '\r' > start.sh.tmp && mv start.sh.tmp start.sh
RUN chmod +x start.sh

# Use the startup script
CMD ["./start.sh"]


# # Build stage
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy application files
# COPY . .

# # Expose both Vite and Storybook ports
# EXPOSE 5173 6006

# # Copy and make the startup script executable
# COPY start.sh .
# RUN chmod +x start.sh

# # Use the startup script
# CMD ["./start.sh"]


# # Build the application
# RUN npm run build

# # Production stage - using a more secure nginx image
# FROM nginx:alpine-slim

# # Copy built assets from build stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]