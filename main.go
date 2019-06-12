package main

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"gopkg.in/go-playground/webhooks.v5/github"
	"net/http"
	"os/exec"
)

const (
	path = "/webhooks"
)

func main() {
	hook, _ := github.New(github.Options.Secret("redbrickstudio"))

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.POST(path, func(e echo.Context) error {
		payload, err := hook.Parse(e.Request(), github.PushEvent)
		if err != nil {
			if err == github.ErrEventNotFound {
				fmt.Println("error occur ", err)
				// ok event wasn;t one of the ones asked to be parsed
			}
		}
		fmt.Println(payload)

		switch payload.(type) {

		case github.PushPayload:
			// pushPayload := payload.(github.PushPayload)
			// Do whatever you want from here...
			// fmt.Printf("%+v", pushPayload)
			cmd := exec.Command("./git_pull.sh")
			cmd.Run()
		}

		return nil
	})

	e.GET("/hello", func(e echo.Context) error {
		return e.JSON(http.StatusOK, "world")
	})

	e.Logger.Fatal(e.Start(":3000"))
}
