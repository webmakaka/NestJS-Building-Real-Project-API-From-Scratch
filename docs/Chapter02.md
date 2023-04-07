# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

## 02 Модуль тегов

<br/>

### 004 Создаем модуль и контроллер тегов

```
$ yarn start:dev
```

<br/>

```
// GET ALL TAGS
$ curl \
    --header "Content-Type: application/json" \
    --request GET http://localhost:3000/tags \
    | jq
```

**response:**

```
[
  "dragons",
  "coffee"
]
```

<br/>

### 005 Создаем сервис для тегов

<br/>

### 006 Настраиваем абсолютные пути

<br/>

### 007 Устанавливаем Postgres

https://jsdev.org/env/docker/db/postgresql/

<br/>

### 008 Конфигурируем базу данных

```
$ yarn add typeorm
$ yarn add @nestjs/typeorm
$ yarn add pg
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
