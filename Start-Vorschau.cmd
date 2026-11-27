@echo off
setlocal
cd /d "%~dp0"
if exist "..\SDI-Arbeitsbereich\tools\node-native\node-v26.13.1-win-x64\node.exe" set "PATH=%~dp0..\SDI-Arbeitsbereich\tools\node-native\node-v26.13.1-win-x64;%PATH%"
where node >nul 2>nul
if errorlevel 1 (
 echo Bitte Node.js LTS installieren. Siehe README.md.
 pause
 exit /b 1
)
if not exist "node_modules\astro" (
 echo Projektpakete werden aus der Lockdatei installiert.
 call npm.cmd ci
 if errorlevel 1 (
  pause
  exit /b 1
 )
)
echo Lokale Vorschau startet. Dieses Fenster zum Beenden schliessen.
call npm.cmd run dev
