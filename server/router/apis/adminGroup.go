package apis

import (
	"github.com/egnis/server/router/apis/handlers"
	"github.com/labstack/echo"
)

func BindAdminGroup(e *echo.Group) {
	e.POST("/login", handlers.Login)
}
