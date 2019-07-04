package apis

import (
	"github.com/egnis/server/router/apis/handlers"
	"github.com/labstack/echo"
)

func BindSubscribeGroup(e *echo.Group, dbHandler *handlers.DBHandler) {
	e.POST("/new-subs", dbHandler.NewSubs)
	e.POST("/remove-subs", dbHandler.DeleteSubs)
	e.GET("/all", dbHandler.FindAllSubs)
}
