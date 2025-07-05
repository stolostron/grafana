ARG mysql_version=9.3
FROM mysql:${mysql_version}
ADD setup.sql /docker-entrypoint-initdb.d
CMD ["mysqld"]
