package config

import (
	"github.com/egnis/server/router/apis/handlers"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/labstack/gommon/log"
	"time"
)

func InitDB() gorm.DB {
	db := initializeDatabase()
	initializeTable(db)
	createMockData(db)

	return db
}
func initializeDatabase() gorm.DB {
	log.Debug("gorm.DB init")

	db, error := gorm.Open("mysql", "root:@/egnis?charset=utf8&parseTime=True&loc=Local&charset=utf8mb4")
	if error != nil {
		log.Fatal(error)
	}

	db.DB().SetMaxIdleConns(10)
	db.DB().SetMaxOpenConns(100)

	return *db
}

func initializeTable(db gorm.DB) {
	var user handlers.Subscriber

	log.Info("initialize tables")

	db.DropTableIfExists(user)
	db.CreateTable(user)
}

func createMockData(db gorm.DB) {
	giho := handlers.Subscriber{
		Email:     "shng10503@naver.com",
		CreateAt:  time.Now(),
		IsDeleted: false,
		Deleted:   time.Now(),
	}

	giho2 := handlers.Subscriber{
		Email:     "rlgh9351@gmail.com",
		CreateAt:  time.Now(),
		IsDeleted: false,
		Deleted:   time.Now(),
	}

	db.Save(&giho)
	db.Save(&giho2)

}
