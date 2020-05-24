FROM ubuntu:19.10

RUN apt-get update -y  && \
	apt-get install -y && \
	apt-get install bash -y && \
	apt-get install nginx -y

RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/* \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8
