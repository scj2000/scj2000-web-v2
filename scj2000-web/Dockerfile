FROM node:16-bullseye

WORKDIR /app
RUN apt-get update && apt-get install git -y
COPY ./package*.json /app/
RUN npm install && npm cache clean --force
COPY . .
ENV PATH ./node_modules/.bin/:$PATH
EXPOSE 3000
CMD ["npm", "run", "dev"]
