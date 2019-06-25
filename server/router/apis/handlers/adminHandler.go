package handlers

import (
	"github.com/labstack/echo"
	"github.com/labstack/gommon/log"
	"net/http"
	"strings"
	"time"
)

type Admin struct {
	Email    string
	Password string
}

func (db *DBHandler) Login(c echo.Context) error {
	var admin Admin

	if admin := c.Bind(&admin); admin != nil {
		return echo.ErrBadRequest
	}

	if !isValidAdminAccount(admin) {
		return echo.ErrBadRequest
	}
	token, err := CreateJwtToken(admin.Email)
	if err != nil {
		log.Error("Error occur during to create JWT")
		return echo.ErrInternalServerError
	}

	jwtCookie := &http.Cookie{}
	jwtCookie.HttpOnly = true
	jwtCookie.Name = "JWTCookie"
	jwtCookie.Value = token
	jwtCookie.Expires = time.Now().Add(48 * time.Hour)

	c.SetCookie(jwtCookie)

	return c.JSON(http.StatusOK, map[string]string{
		"message": "success",
		"token":   token,
		"email":   admin.Email,
	})
}

func isValidAdminAccount(admin Admin) bool {
	if strings.TrimRight(admin.Email, "\n") != "shng10503@naver.com" {
		return false
	}

	if strings.TrimRight(admin.Password, "\n") != "zxcv1234" {
		return false
	}

	return true
}
