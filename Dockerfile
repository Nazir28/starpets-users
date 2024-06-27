FROM postgres:latest

ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

WORKDIR /var/lib/postgresql/data

EXPOSE 5432

CMD ["postgres"]