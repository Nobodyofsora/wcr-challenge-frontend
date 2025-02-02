FROM node:latest
RUN npm install -g @ionic/cli

WORKDIR /www/app
COPY . /www/app
EXPOSE 8100
ENTRYPOINT ["ionic"]
CMD ["serve", "--external", "--no-open"]