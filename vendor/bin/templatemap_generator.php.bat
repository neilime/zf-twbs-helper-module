@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../laminas/laminas-view/bin/templatemap_generator.php
php "%BIN_TARGET%" %*
