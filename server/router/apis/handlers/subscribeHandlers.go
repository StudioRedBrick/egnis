package handlers

import (
	"github.com/labstack/echo"
	"net/http"
	"time"
)

/**
response code
2222 : Register completed
3000 : already exist email

*/
type Subscriber struct {
	Id        int    `gorm:"primary_key;auto_increment"`
	Email     string `gorm:"unique"`
	CreateAt  time.Time
	IsDeleted bool
	Deleted   time.Time
}

type SubsListView struct {
	Id    int
	Email string
}

type SubsDeleteRequest struct {
	Email string
}

func (db *DBHandler) NewSubs(c echo.Context) error {
	var subs Subscriber

	if err := c.Bind(&subs); err != nil {
		return echo.ErrBadRequest
	}

	alrSubs := db.FindSubs(subs.Email)

	if alrSubs.Email == subs.Email {
		return c.JSON(http.StatusOK, "3000")
	}
	subs.CreateAt = time.Now()
	subs.Deleted = subs.CreateAt
	subs.IsDeleted = false

	db.db.Save(&subs)

	return c.JSON(http.StatusOK, "2222")
}

func (db *DBHandler) FindSubs(email string) Subscriber {
	var subs Subscriber

	db.db.Where("email = ? and is_deleted = false", email).Find(&subs)

	return subs
}

func (db *DBHandler) FindAllSubs(c echo.Context) error {
	var subscribers []Subscriber

	err := db.db.Where("is_deleted = false").Find(&subscribers).Error

	if err != nil {
		return echo.ErrInternalServerError
	}
	var subsEmailViews []SubsListView
	for _, value := range subscribers {
		subsEmailViews = append(subsEmailViews, SubsListView{
			value.Id,
			value.Email,
		})
	}

	return c.JSON(http.StatusOK, map[string][]SubsListView{
		"subs-list": subsEmailViews,
	})
}

func (db *DBHandler) DeleteSubs(c echo.Context) error {
	var willDeleteSubscribers []string

	if err := c.Bind(&willDeleteSubscribers); err != nil {
		return echo.ErrBadRequest
	}

	for _, value := range willDeleteSubscribers {
		db.db.Model(&Subscriber{}).Where("Id = ? and is_deleted = false", value).Update(map[string]interface{}{"is_deleted": true, "deleted": time.Now()})
	}
	return c.JSON(http.StatusOK, "2222")
}
