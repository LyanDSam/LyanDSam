@echo off
title Auto Copy Assets & Git Push
echo =======================================================
echo   Copying Profile Photos & Pushing to GitHub...
echo =======================================================
node copy_assets.js
echo.
echo Done! Check your GitHub profile page.
pause
