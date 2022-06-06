FROM node:14-alpine

# Change working directory
WORKDIR /app

RUN apk update && apk upgrade 

# Copy source code
COPY . /app


# Install dependencies
RUN npm install 

RUN chown -R node:node /app

USER node

# Expose API port to the outside
EXPOSE 5000

RUN npm install pm2 -g
RUN pm2 start server.js

# Use CMD or ENTRYPOINT
# ENTRYPOINT ["sh", "./docker-start.sh"]

# Launch application
CMD ["npm","start"]
