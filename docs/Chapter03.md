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
// REGISTER USER
$ curl \
    --header "Content-Type: application/json" \
    --request POST http://localhost:3000/users
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
