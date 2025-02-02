FROM node:18.20-slim

RUN npm install -g @ionic/cli && npm install -g @angular/cli

WORKDIR /www/app
COPY . /www/app
EXPOSE 8100
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]