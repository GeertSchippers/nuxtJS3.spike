FROM php:7.4-fpm-alpine AS phpfpm.bouwenergie.local
EXPOSE 9000 9515

# Set working directory
WORKDIR /var/www


# Install dependencies
RUN apk update && apk add --no-cache \
    bash \
    alpine-sdk shadow vim curl \
    zip libzip-dev \
    libpng-dev libxml2-dev php-soap mysql-client \
    openssh

# Add and Enable extensions needed for Laravel
RUN docker-php-ext-install mysqli session pdo_mysql zip exif gd bcmath xml soap

# Add php.ini
RUN cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add nodejs and npm
# RUN apk add --update nodejs npm
RUN apk add nodejs npm
# RUN npm update -g npm@lts
RUN npm update npm
# RUN npm update -g node@lts
RUN npm update node

# Remove Cache
RUN rm -rf /var/cache/apk/*

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
# RUN usermod -u 1000 www-data

# Copy existing application directory permissions
RUN chown -R www:www /var/www

# Change current user to www
USER www

CMD ["php-fpm"]