export const news = {
  "response": [
      {
          "id": 1,
          "user_id": 1,
          "unix_time": 1658210445,
          "title": "Тестовый заголовок",
          "body": "Тестовое описание",
          "tags": [
              "testtag"
          ],
          "img_urls": []
      },
      {
          "id": 2,
          "user_id": 2,
          "unix_time": 1658211646,
          "title": "Example title",
          "body": "ASdkALWdhlKASJdlkAJWldk jASKdjKAJWdlkjAS KdjwdjLASKdlkAwldkj\\nASLdALWKdjALKSdjlKAWjdlkAJSdlkAdaw\\nASdAWL;dhALSd",
          "tags": [
              "testtag"
          ],
          "img_urls": []
      },
      {
          "id": 3,
          "user_id": 2,
          "unix_time": 1658211646,
          "title": "Манга \"Токийский гуль\"",
          "body": "Манга в жанре тёмного фэнтези авторства Суи Исиды, выпускалась в период с сентября 2011 года по сентябрь 2014 года в журнале Weekly Young Jump издательства Shueisha, cобранные главы были изданы в виде 14 томов. Продолжение под названием «Токийский гуль: re» выпускалось в журнале Weekly Young Jump в период с октября 2014 года по июль 2018 года и было собрано в 16 томах.",
          "tags": [
              "anime",
              "manga",
              "tokyo ghoul"
          ],
          "img_urls": [
              "https://template-woad-psi.vercel.app/news_1.jpg",
              "https://template-woad-psi.vercel.app/news_1.jpg",
          ]
      }
  ]
}

export default function handler(req, res){
  res.status(200).json(news.response)
}