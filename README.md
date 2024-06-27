## Запуск образа БД

```shell
docker build -t my_postgres .
```

```shell
docker run --name my_postgres_container -d -p 5432:5432 my_postgres_image
```

## Установка зависимостей

```shell
npm install
```

## Запуск приложения

```shell
npm start
```

## Пример запроса 1

type - `DEPOSIT`(пополнение) || `WITHDRAW`(списпние)

```shell
curl --request POST \
  --url http://localhost:3001/api/user/1/balance \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --data '{
	"amount": -2
}
'
```

## Пример ответа 1

```shell
{
	"id": 1,
	"balance": 9998
}
```

## Пример запроса 2

type - `DEPOSIT`(пополнение) || `WITHDRAW`(списпние)

```shell
curl --request POST \
  --url http://localhost:3001/api/user/1/balance \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --data '{
	"amount": 2,
	"type": "WITHDRAW"
}
'
```

## Пример ответа 2

```shell
{
	"id": 1,
	"balance": 9998
}
```

## Нагрузочное тестирование

### Тест 1

Команда для запуска ([Исходники]()):

```shell
node src/example-test/1.js
```

### Тест 2

Команда для запуска ([Исходники]()):

```shell
node src/example-test/2.js
```
