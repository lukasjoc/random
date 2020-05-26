package main

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func greet(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"msg":  "Hello World!",
		"time": time.Now(),
	})
}

func main() {
	r := gin.Default()
	r.GET("/", greet)
	r.Run()
}
