#!/bin/sh

docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=4lf483t0 -e MYSQL_USER=eddealmeida \
  -e MYSQL_PASSWORD=4lf483t0 -e MYSQL_DATABASE=financas mysql:latest

docker run -d --name phpmyadmin -e ALLOW_ARBITRARY=1 -p 8080:80 nazarpc/phpmyadmin:latest

exit 0
