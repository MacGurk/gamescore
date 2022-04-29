FROM node:alpine
RUN apk add --no-cache git
WORKDIR /data
RUN git clone https://github.com/MacGurk/gamescore.git /data/app
WORKDIR /data/app
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["node", "dist/server.js"]
