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

```bash
npx prisma generate
```

## Update schema
run these command
```bash
npx prisma generate 
npx prisma db push 
npx prisma studio
```