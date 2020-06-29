FROM alpine:latest
RUN apk add curl
RUN apk add yarn
RUN apk add util-linux
RUN apk add --update nodejs
RUN yarn global add gatsby-cli

COPY . /app

WORKDIR /app

RUN yarn install

RUN gatsby clean
RUN gatsby build

EXPOSE 9000

HEALTHCHECK --interval=15s --timeout=5s CMD curl -f http://0.0.0.0:9000 || exit 

CMD ["gatsby","serve","-H", "0.0.0.0"]
