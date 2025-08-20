# Prisma

Tarawut Sri-on

## Required
- Git
- Docker 
- PostgresSQL
- Node.JS
- Prisma
- Vscode( PostgreSQL Extension (Chris Kolkman))

## Running
### Database
```
docker compose up -d
```
### Schema
```
npx prisma init --datasource-provider postgresql
npx prisma generate
npx prisma db push
npx prisma studio
```

## Develop
first time
```bash
npx prisma init --datasource-provider postgresql
npx prisma generate
npx prisma db push
npx prisma studio
```
Update schema

- run these command
- Run this command npx prisma generate 2.1 npx prisma studio ชื่อตารางเปลี่ยน แต่ขึ้น popup ผิดพลาด 2.2 connect db ชื่อตารางยังไม่ถูกเปลี่ยน
- Run this command npx prisma db push 3.1 npx prisma studio ชื่อตารางเปลี่ยน ไม่แต่ขึ้น error 3.2 connect db ชื่อตารางเปลี่ยนเป็นข้อมูลล่าสุด


## Normal
```
npx prisma generate
```