FROM golang:1.14-alpine3.11 as builder

RUN mkdir /app

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download
COPY . .

RUN apk add --update --no-cache ca-certificates git && \
  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o /go/bin/go-docker-test

# ##########
FROM scratch

COPY --from=builder /go/bin/go-docker-test /go/bin/go-docker-test

ENTRYPOINT [ "/go/bin/go-docker-test" ]
