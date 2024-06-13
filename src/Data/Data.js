import project1 from "./../image/dishes.png"
import project2 from "./../image/bookshopphoto.png"
import project3 from "./../image/currency.png"
import project4 from "./../image/movies.png"
import project5 from "./../image/weather.png"
import project6 from "./../image/bike.png"

const data = [{id:1, title: "dishes", picture: project1, shortDescription: "Приложение для просмотра и поиска рецептов", fullDescription: "Приложение позволяет искать рецепты по категориям или по названиям блюд. Есть возможность просматривать подробную информацию по конкретному рецепту на отдельной странице.", stack: "React, JS, React-Router, fetch", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/dishes-recipes.git"}, 
{id:2, title: "bookshop", picture: project2, shortDescription: "Приложение для поиска книг по категориям", fullDescription: "В зависимости от выбранного жанра показывается список книг с кратким описанием сюжета. Для подгрузки большего количества книг реализован lazy loading. Использовалось API GOOGLE BOOKS.", stack: "JS, html, css, fetch", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/Bookshop.git"},
{id:3, title: "currency converter", picture: project3, shortDescription: "Приложение для конвертации валют", fullDescription: "Конвертр валют позволяет переводить рубли в доллары и наоборот, исходя из текущего курса. API: free.currconv.com.", stack: "React, TypeScript, fetch", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/currency-converter.git"},
{id:4, title: "movies", picture: project4, shortDescription: "Приложение для поиска фильмов", fullDescription: "Поиск фильмов осуществляется и по жанрам, и по названиям. Приложение позволяет посмотреть подробную информацию о фильме и получить кадры из фильмы. API: kinopoiskapiunofficial.", stack: "React, TypeScript, Redux-Toolkit, fetch", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/movies.git"}, 
{id:5, title: "weather", picture: project5, shortDescription: "Приложение для получения прогноза погоды", fullDescription: "Приложение показывает текущие данные о погоде выбранного города.", stack: "html, JS, css", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/Weather.git"},
{id:6, title: "bicycle rent", picture: project6, shortDescription: "Приложение для аренды велосипеда", fullDescription: "Присутствует функционал авторизации, регистрации. Аккаунту пользователя доступно: аренда велосипеда, оформление кражи велосипеда. Аккаунту админа доступно: просмотр и редактирование заявок о краже велосипеда, назначение прав админа другим пользователям.", stack: "React, JS, axios", link: "https://github.com/qwertyuiop098ghdjksjhkdsjn/final-project.git"}]

export default data