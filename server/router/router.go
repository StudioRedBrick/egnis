package router

import (
	"github.com/egnis/server/router/apis"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func New() *echo.Echo {

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	healthGroup := e.Group("/health")

	adminGroup := e.Group("/admin")

	apis.BindHealthCheckGroup(healthGroup)
	apis.BindAdminGroup(adminGroup)

	/**
	e.POST("/subscriber/new-subs", func(e echo.Context) error {

	})
	*/

	return e
}
