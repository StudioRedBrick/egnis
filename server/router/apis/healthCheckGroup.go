package apis

import (
	"github.com/labstack/echo"
	"net/http"
)

func BindHealthCheckGroup(e *echo.Group) {
	e.GET("/check", func(e echo.Context) error {
		return e.JSON(http.StatusOK, "ok")
	})
}
