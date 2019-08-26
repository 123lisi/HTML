@echo off

rem -- http://phpnow.org
rem -- YinzCN_at_Gmail.com

setlocal enableextensions
set Sys32=%SystemRoot%\system32
set Path=%Sys32%;%Sys32%\wbem;%SystemRoot%
prompt -$g
title PHPnow - 组件版本选择

set package=Package.7z
set htd20=2.0.63
set htd22=2.2.16
set myd50=5.0.90
set myd51=5.1.50

:htd_choice
echo.
echo  选择 Apache 版本
echo   20  -  Apache %htd20% (推荐)
echo   22  -  Apache %htd22%
set input=
set /p input= -^> 请选择: 
if @%input%==@20 set htd_e=22
if @%input%==@22 set htd_e=20
if @%htd_e%==@ goto htd_choice

:myd_choice
echo.
echo  选择 MySQL 版本
echo   50  -  MySQL %myd50% (推荐)
echo   51  -  MySQL %myd51%
set input=
set /p input= -^> 请选择: 
if @%input%==@50 set myd_e=%myd51%
if @%input%==@51 set myd_e=%myd50%
if @%myd_e%==@ goto myd_choice

title PHPnow - 正在解压 ...

"%cd%\7z.exe" x -x!Apache-%htd_e%* -x!MySQL-%myd_e%* %package%

del 7z.exe 7z.dll %package% /q
echo.
echo   # 解压完成! 是否执行 Init.cmd 初始化?
:init
set input=
set /p input= -^> 请选择(y/n): 
if /i "%input%"=="n" goto end
if /i not "%input%"=="y" goto init
call Init.cmd

:end
title %ComSpec%
start /b del setup.cmd ^& exit /b
