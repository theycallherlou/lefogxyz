
ARG NODE_VERSION=22.2.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app




################################################################################
# Create a stage for installing production dependecies.
FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

################################################################################
# Build layer (for development dependencies and building the app)
FROM deps AS build

# Install dev dependencies and build the application
RUN npm ci

# Copy all necessary files (ignoring unnecessary ones via .dockerignore)
COPY . .

# Run the build command (Next.js build)
RUN npm run build


################################################################################
# Final runtime image (minimal Node.js environment)
FROM node:${NODE_VERSION}-alpine as final

# Set production environment
ENV NODE_ENV production

# Set the user to "node" for security
USER node

# Copy the built files and node_modules from previous stages
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json

# Expose the port the app runs on
EXPOSE 3000

# Run the application using "next start" for optimized production
CMD ["npm", "run", "start"]

