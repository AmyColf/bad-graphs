#/bin/bash
ab -n 10000 -c 50 -u ./put.json -T application/json -m PUT http://localhost:4040/nodes/rust
