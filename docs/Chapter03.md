# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 03 Модуль авторизации

<br/>

### 011 Знакомимся с миграциями

```
$ yarn db:drop
$ yarn db:create src/migrations/CreateTags
$ yarn db:migrate
```

<br/>

```
SELECT * FROM migrations;
```

<br/>

```
postgresdb=# SELECT * FROM migrations;
 id |   timestamp   |          name
----+---------------+-------------------------
  1 | 1680910391043 | CreateTags1680910391043
(1 row)
```

<br/>

### 012 Подготавливаем запрос для регистрации

```
// CREATE USER
$ curl \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users
```

<br/>

### 013 Что такое DTO?

```
// CREATE USER
$ curl \
    --data '{
        "user": {
            "username": "marley",
            "email": "marley@example.com",
            "password": "pass123"}
    }' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users \
    | jq
```

**response:**

```
{
  "username": "marley",
  "email": "marley@example.com",
  "password": "pass123"
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
