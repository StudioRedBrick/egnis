package apis

import (
	"github.com/egnis/server/router/apis/handlers"
	"github.com/labstack/echo"
	"net/http"
)

func BindHealthCheckGroup(e *echo.Group, dbHandler *handlers.DBHandler) {
	e.GET("/check", func(e echo.Context) error {
		return e.JSON(http.StatusOK, "ok")
	})
}
