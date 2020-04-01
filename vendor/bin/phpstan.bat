@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../phpstan/phpstan/bin/phpstan
php "%BIN_TARGET%" %*
