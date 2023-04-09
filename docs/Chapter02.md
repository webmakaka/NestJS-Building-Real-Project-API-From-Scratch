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

### 009 Создаем сущность тега

<br/>

```
// Connect
$ PGPASSWORD=pA55w0rd123 psql -U admin1 -h postgres -p 5432 -d postgresdb
```

<br/>

```
postgresdb=# \dt
```

<br/>

```
postgresdb=# \d tags;
                                 Table "public.tags"
 Column |       Type        | Collation | Nullable |             Default
--------+-------------------+-----------+----------+----------------------------------
 id     | integer           |           | not null | nextval('tags_id_seq'::regclass)
 name   | character varying |           | not null |
Indexes:
    "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY, btree (id)
```

<br/>

### 010 Начинаем работать с репозиторием тегов

<br/>

```
INSERT INTO tags (name) VALUES ('dragons');
INSERT INTO tags (name) VALUES ('coffee');
SELECT * FROM tags;
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
{
  "tags": [
    "dragons",
    "coffee"
  ]
}
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
