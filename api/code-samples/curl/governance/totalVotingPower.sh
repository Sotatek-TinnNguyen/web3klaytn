curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/governance/totalVotingPower' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "governance_totalVotingPower",
  "id": 1,
  "jsonrpc": "2.0",
  "params": []
}'
