FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy.conf /etc/nginx/proxy.conf
COPY mime.types /etc/nginx/conf/mime.types

