FROM golang:1.14-alpine3.11 as builder
RUN mkdir -p /app
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN apk add --update --no-cache ca-certificates git && \
  CGO_ENABLED=0 GOOS=$(go env GOOS) GOARCH=$(go env GOARCH) go build -a -installsuffix cgo -o /go/bin/go-docker-test

FROM scratch
COPY --from=builder /go/bin/go-docker-test /go/bin/go-docker-test
ENTRYPOINT [ "/go/bin/go-docker-test" ]
