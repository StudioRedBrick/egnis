package handlers

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
	"time"
)

type JwtClaims struct {
	Email string
	jwt.StandardClaims
}

func CreateJwtToken(email string) (string, error) {
	claims := JwtClaims{
		email,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
		},
	}

	rawToken := jwt.NewWithClaims(jwt.SigningMethodHS512, claims)

	token, err := rawToken.SignedString([]byte("secretKey"))

	if err != nil {
		return "", err
	}
	return token, nil
}

func FindEmailByJwt(c echo.Context) (int, error) {
	user := c.Get("user")

	token := user.(*jwt.Token)

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return 0, echo.ErrUnauthorized
	}

	return int(claims["email"].(float64)), nil
}
