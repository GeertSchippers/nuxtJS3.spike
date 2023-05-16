FROM nginx:latest AS platform.bouwenergie.local
EXPOSE 80
EXPOSE 443

ADD ca-bouwenergie-local.crt /usr/local/share/ca-certificates/ca-bouwenergie-local.crt
RUN chmod 644 /usr/local/share/ca-certificates/ca-bouwenergie-local.crt && update-ca-certificates
# RUN chmod 644 /var/local/platform.bouwenergie.local/docker/platform-bouwenergie-local/platform.bouwenergie.local/ca-bouwenergie-local.crt
# RUN update-ca-certificates

RUN service nginx start