package apis

import (
	"github.com/egnis/server/router/apis/handlers"
	"github.com/labstack/echo"
)

func BindAdminGroup(e *echo.Group, dbHandler *handlers.DBHandler) {
	e.POST("/login", dbHandler.Login)
}
