#!/bin/bash
echo "Requesting access for the demo…"

TOKEN=$(curl -fsSL 'https://www.cryptocommerce.cloud/api/whitelist')

if [ -z "$TOKEN" ]; then
  echo "Error: Could not reach the whitelist server. Please try again."
  exit 1
fi

echo "Added to whitelist successfully. Opening demo…"
open "https://demo.cryptocommerce.cloud/?token=$TOKEN"
