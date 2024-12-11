FROM node:14

WORKDIR /app

# COPY server.js .
# COPY images ./images
COPY package.json .
COPY . .

RUN npm install express ejs path

EXPOSE 3000

CMD ["node", "server.js"]
