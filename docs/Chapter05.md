# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 05 Модуль профиля

<br/>

### 031 Готовим сид данные для нашей базы

```
$ yarn db:drop
$ yarn db:migrate
$ yarn db:seed
```

<br/>

```
SELECT * FROM users;
```

<br/>

```
// LOGIN USER
```

<br/>

### 032 Реализуем получение профиля

```
// GET PROFILE
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request GET "http://localhost:3000/profiles/marley" \
    | jq
```

<br/>

**response:**

```
{
  "profile": {
    "id": 1,
    "username": "marley",
    "bio": "",
    "image": "",
    "following": false
  }
}
```

<br/>

### 033 Имплементируем фоллоу пользователей

Решили делать в ручную

```
$ yarn db:create src/migrations/CreateFollows
$ yarn db:migrate
```

<br/>

```
// CREATE NEW USER
$ curl \
    --data '{
        "user": {
            "username": "webmakaka",
            "email": "webmakaka@example.com",
            "password": "pass123"}
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users \
    | jq
```

<br/>

```
// FOLLOW USER
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request POST "http://localhost:3000/profiles/webmakaka/follow" \
    | jq
```

<br/>

**response:**

```
{
  "profile": {
    "id": 2,
    "username": "webmakaka",
    "bio": "",
    "image": "",
    "following": true
  }
}
```

<br/>

```
SELECT * FROM follows;
```

<br/>

### 034 Реализуем анфоллоу пользователей

<br/>

```
// UNFOLLOW USER
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request DELETE "http://localhost:3000/profiles/webmakaka/follow" \
    | jq
```

<br/>

**response:**

```
{
  "profile": {
    "id": 2,
    "username": "webmakaka",
    "bio": "",
    "image": "",
    "following": false
  }
}
```

<br/>

```
// GET PROFILE
```

<br/>

### 035 Создаем фид текущего пользователя

<br/>

```
// LOGIN AS WEBMAKAKA
// GET AUTH TOKEN
```

<br/>

```
// WEBMAKAKA CREATE A NEW POST
$ curl \
    --data '{
        "article": {
            "title": "WebMakaka Super Ape",
            "description": "WebMakaka a Long Story about Apes Planet",
            "body": "Super cinema i think",
            "tagList": ["monkeys", "animals", "cinema"]
        }
    }' \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request POST http://localhost:3000/articles \
    | jq
```

<br/>

```
// MARLEY FOLLOW WEBMAKAKA
```

<br/>

```
// MARLEY GET FEED
$ curl \
    --header "Content-Type: application/json" \
    --header "Authorization: Token ${AUTH_TOKEN}" \
    --request GET "http://localhost:3000/articles/feed" \
    | jq
```

<br/>

**response:**

```
{
  "articles": [
    {
      "id": 3,
      "slug": "webmakaka-super-ape-qyqjvb",
      "title": "WebMakaka Super Ape",
      "description": "WebMakaka a Long Story about Apes Planet",
      "body": "Super cinema i think",
      "createdAt": "2023-04-13T19:11:24.645Z",
      "updatedAt": "2023-04-13T19:11:24.645Z",
      "tagList": [
        "monkeys",
        "animals",
        "cinema"
      ],
      "favoritesCount": 0,
      "author": {
        "id": 2,
        "email": "webmakaka@example.com",
        "username": "webmakaka",
        "bio": "",
        "image": ""
      }
    }
  ],
  "articlesCount": 1
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
