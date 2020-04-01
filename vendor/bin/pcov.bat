@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../pcov/clobber/bin/pcov
php "%BIN_TARGET%" %*
