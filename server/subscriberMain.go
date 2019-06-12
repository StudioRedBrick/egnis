package main

import (
	"github.com/egnis/server/router"
)

func main() {
	e := router.New()
	e.Logger.Fatal(e.Start(":3001"))
}
