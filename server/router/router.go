package router

import (
	"github.com/egnis/server/router/apis"
	"github.com/egnis/server/router/apis/handlers"
	"github.com/egnis/server/router/config"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"net/http"
)

func New() *echo.Echo {

	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete},
	}))

	db := config.InitDB()

	dbHandler := handlers.NewDBHandler(&db)

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	healthGroup := e.Group("/health")
	adminGroup := e.Group("/admin")
	subsGroup := e.Group("/subscriber")

	apis.BindHealthCheckGroup(healthGroup, dbHandler)
	apis.BindAdminGroup(adminGroup, dbHandler)
	apis.BindSubscribeGroup(subsGroup, dbHandler)

	return e
}
