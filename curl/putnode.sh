#!/bin/bash
curl -X PUT \
  http://localhost:4040/nodes \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: a7cbf776-43db-437f-9c7f-fbfd1b41fde6' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "Amy!"
}'
