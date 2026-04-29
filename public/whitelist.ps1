Write-Host "Requesting access for the demo..." -ForegroundColor Green

# Use curl.exe (available on Windows 10/11) — avoids TLS and non-2xx exception issues
# that affect Invoke-WebRequest in PowerShell 5.1
$TOKEN = & curl.exe -fsSL "https://www.cryptocommerce.cloud/api/whitelist" 2>$null

if (-not $TOKEN) {
    Write-Host "Error: Could not reach the whitelist server. Please check your internet connection and try again." -ForegroundColor Red
    exit 1
}

# Sanity check: a valid token is two base64url segments joined by a dot, not an HTML error page
if ($TOKEN -match "<|Error|error") {
    Write-Host "Error: Whitelist server returned an unexpected response. Please try again later." -ForegroundColor Red
    exit 1
}

Write-Host "Added to whitelist successfully. Opening demo..." -ForegroundColor Green
Start-Process "https://demo.cryptocommerce.cloud/?token=$TOKEN"
