FROM php:7.4-fpm

RUN apt-get update \
    && apt-get -y --no-install-recommends install libpq-dev \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN docker-php-ext-install pdo pdo_pgsql

RUN apt-get update \
    && apt-get -y --no-install-recommends install libzip-dev unzip \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
RUN curl --silent --show-error https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
