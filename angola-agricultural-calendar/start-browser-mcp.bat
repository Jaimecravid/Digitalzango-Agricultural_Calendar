@echo off
echo Starting Browser MCP Tools...
start "Browser Tools Server" cmd /k "npx @agentdeskai/browser-tools-server@latest"
timeout /t 3
start "Browser MCP" cmd /k "npx @agentdeskai/browser-tools-mcp@latest"
echo Both servers started!
pause
