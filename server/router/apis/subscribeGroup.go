package apis

import (
	"github.com/egnis/server/router/apis/handlers"
	"github.com/labstack/echo"
)

func BindSubscribeGroup(e *echo.Group, dbHandler *handlers.DBHandler) {
	e.POST("/remove-subs", dbHandler.DeleteSubs)
	e.GET("/all", dbHandler.FindAllSubs)
}

// 아래의 함수는 cafe24에서 요청하는 함수로써,
// jwt검사를 하지 않을 뿐더러, 이해하기 쉽게 External 이라는 키워드를 추가함.
// 참고로, jwt를 갖은 사용자는 Admin뿐이다.
func BindExternalSubscribeGroup(e *echo.Group, dbHandler *handlers.DBHandler) {
	e.POST("/new-subs", dbHandler.NewSubs)
}
