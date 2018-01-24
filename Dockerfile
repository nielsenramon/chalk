FROM alpine:3.7

# Build
RUN apk --update --no-cache add \
    ruby \
    ruby-dev \
    ruby-rdoc \
    ruby-irb \
    ruby-nokogiri \
    nodejs \
    build-base \
    g++ \
    make \
    musl-dev \
    libffi-dev
COPY Gemfile /build/
COPY package.json /build/
COPY bin/setup /build/bin/setup
WORKDIR /build
RUN bin/setup

# Run
EXPOSE 4000
WORKDIR /blog
VOLUME ["/blog"]
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]