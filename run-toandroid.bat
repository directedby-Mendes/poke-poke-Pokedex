@echo off

call ionic build
call npx cap sync android
call npx cap open android