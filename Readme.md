# [Oleksandr Kocherhin] NestJS - пишем API для реального проекта с нуля [RUS, 2021]

<br/>

[Аналогичный проект с кодом на 2021 год](https://github.com/webmakaka/NestJS-Building-Real-Project-API-From-Scratch-v1.1)

<br/>

```
$ sudo apt install -y jq
```

<br/>

```
$ volta install node@18 npm@9 yarn@3
```

<br/>

```
$ npm install -g @nestjs/cli
$ npm install -g typescript
```

<br/>

```
$ nest -v
9.3.0
```

<br/>

## Запуск

```
$ git clone https://github.com/webmakaka/NestJS-Building-Real-Project-API-From-Scratch.git
```

<br/>

```
// Запуск базы
$ cd NestJS-Building-Real-Project-API-From-Scratch/docker
$ docker-compse up
```

<br/>

```
// Создание структур таблиц и добавление данных
$ cd app
$ yarn db:drop
$ yarn db:migrate
$ yarn db:seed
```

<br/>

```
// Запуск приложения
$ cd NestJS-Building-Real-Project-API-From-Scratch/app
$ yarn install
$ yarn start
```

<br/>

```
// Проверка разработанного приложения тестами
$ git clone https://github.com/gothinkster/realworld.git
$ cd /realworld/api

$ export APIURL=http://localhost:3000/api
$ export USERNAME=marley4
$ export EMAIL=marley4@example.com
$ export PASSWORD=pass123

$ ./run-api-tests.sh
```

<br/>

```
┌─────────────────────────┬───────────────────┬──────────────────┐
│                         │          executed │           failed │
├─────────────────────────┼───────────────────┼──────────────────┤
│              iterations │                 1 │                0 │
├─────────────────────────┼───────────────────┼──────────────────┤
│                requests │                32 │                0 │
├─────────────────────────┼───────────────────┼──────────────────┤
│            test-scripts │                48 │                2 │
├─────────────────────────┼───────────────────┼──────────────────┤
│      prerequest-scripts │                18 │                0 │
├─────────────────────────┼───────────────────┼──────────────────┤
│              assertions │               290 │               36 │
├─────────────────────────┴───────────────────┴──────────────────┤
│ total run duration: 17.6s                                      │
├────────────────────────────────────────────────────────────────┤
│ total data received: 10.63kB (approx)                          │
├────────────────────────────────────────────────────────────────┤
│ average response time: 24ms [min: 4ms, max: 135ms, s.d.: 28ms] │
└────────────────────────────────────────────────────────────────┘
```

<br/>

## Разработка

### [01 Подготавливаем инструменты](./docs/Chapter01.md)

### [02 Модуль тегов](./docs/Chapter02.md)

### [03 Модуль авторизации](./docs/Chapter03.md)

### [04 Модуль статьи](./docs/Chapter04.md)

### [05 Модуль профиля](./docs/Chapter05.md)

### [06 Последние улучшения](./docs/Chapter06.md)

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
