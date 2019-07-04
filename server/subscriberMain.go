package main

import (
	"github.com/egnis/server/router"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := router.New()
	e.Use(middleware.Static("../"))
	e.Logger.Fatal(e.Start(":3001"))
}
