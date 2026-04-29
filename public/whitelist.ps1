Write-Host "Requesting access for the demo..." -ForegroundColor Green

try {
    $TOKEN = (Invoke-WebRequest -Uri "https://www.cryptocommerce.cloud/api/whitelist" -UseBasicParsing).Content.Trim()
} catch {
    Write-Host "Error: Could not reach the whitelist server. Please try again." -ForegroundColor Red
    exit 1
}

if (-not $TOKEN) {
    Write-Host "Error: Empty response from whitelist server." -ForegroundColor Red
    exit 1
}

Write-Host "Added to whitelist successfully. Opening demo..." -ForegroundColor Green
Start-Process "https://demo.cryptocommerce.cloud/?token=$TOKEN"
