#!/bin/bash
curl -X PUT \
  http://localhost:4040/edges \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 17ba9b97-bba2-49e5-ab3f-bc4773c6eb49' \
  -H 'cache-control: no-cache' \
  -d '{
	"parent": 0,
	"child": 1
}'
