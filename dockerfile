FROM node:lts
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","start"]
