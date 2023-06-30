# Generate Directus schema for CMS

## To generate schema

```bash
docker-compose exec scj2000-cms npx directus schema snapshot --yes schema/snapshot.yaml
```

## To apple schema

```bash
docker-compose exec scj2000-cms npx directus schema apply --dry-run schema/snapshot.yaml
docker-compose exec scj2000-cms npx directus schema apply --yes schema/snapshot.yaml
```
