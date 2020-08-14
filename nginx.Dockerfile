FROM nginx

WORKDIR /etc/nginx
RUN mkdir logs
RUN touch logs/access.log
RUN touch logs/api.access.log
RUN touch logs/error.log
RUN touch logs/nginx.pid

COPY ssl/default.crt ssl/default.crt
COPY ssl/default.key ssl/default.key

COPY nginx.conf nginx.conf
COPY proxy.conf proxy.conf
COPY mime.types conf/mime.types
