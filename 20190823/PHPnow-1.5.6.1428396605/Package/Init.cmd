@echo off

rem -- http://phpnow.org
rem -- YinzCN_at_Gmail.com

setlocal enableextensions
call Pn\config.cmd
if "%php%"=="" exit /b

if not "%1"=="" (
  call :%1 %1
  goto :eof
)

prompt -$g
title ��ʼ�� PHPnow %pn_ver% - Apache %htd_ver% + PHP + MySQL %myd_ver%
echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|     #####  PHPnow.org  -  ��ɫ��ѵ� PHP �����׼�  #####     ^|
echo  ^|______________________________________________________________^|
echo.

if not exist %Sys32%\tasklist.exe goto init
if not exist %Sys32%\netstat.exe goto init

:chk_htd_port
%php% "chk_port('%htd_port%');" && goto chk_myd_port
echo.
echo     1 - Apache(http) ʹ�������˿�(���Ƽ�)
echo     2 - ���� (�˿��ѱ��ͷ� �� �������˳�)
echo.
set input=
set /p input=-^> ��ѡ��: 
if "%input%"=="1" (
  call PnCp.cmd chg_port noRestart
  call Pn\config.cmd
  goto chk_htd_port
)
goto chk_htd_port

:chk_myd_port
%php% "chk_port('%myd_port%');" && goto init
echo.
echo     1 - MySQL ʹ�������˿�(���Ƽ�)
echo     2 - ���� (�˿��ѱ��ͷ� �� �������˳�)
echo.
:L_02
set input=
set /p input=-^> ��ѡ��: 
if "%input%"=="1" goto L_01
if "%input%"=="2" goto chk_myd_port
goto L_02
:L_01
set nport=
set /p nport=-^> �����¶˿�(1-65535): 
if "%nport%"=="" goto L_01
if "%nport%"=="%htd_port%" goto L_01
%php% "$p = '%nport%'; if ($p !== ''.ceil($p) || 1 > $p || $p > 65535) exit(1);" || goto L_01
set myd_port=%nport%
%php% "frpl('Pn/Config.cmd', '^(set myd_port=)\d+(\r\n)', '${1}%myd_port%$2');"
if exist %myd_dir%\my.ini %php% "frpl('%myd_dir%\my.ini', '^(port\s*=)\s*\d+', '$1 %myd_port%');"
goto chk_myd_port

:init
%php% if (file_exists($php_ini)) cfg_bak('backup {��ʼ��֮ǰ�ı���}');
echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|    ��ʼ�ļ����� ...                                          ^|
echo.

rem ����Ŀ¼
if not exist %htd_dir%\conf\extra md %htd_dir%\conf\extra
if not exist %htd_dir%\logs md %htd_dir%\logs

if %htd_ver%==2.0 goto htd_20
if %htd_ver%==2.2 goto htd_22
goto end

:htd_20
rem ���� Apache 2.0
set tmp=%htd_dir%\conf\magic
if not exist %tmp% copy %tmp%.default %tmp% /y
set tmp=%htd_dir%\conf\mime.types
if not exist %tmp% copy %tmp%.default %tmp% /y

copy Pn\conf.default\httpd-2_0.conf %htd_dir%\conf\httpd.conf
%php% "chg_port('%htd_port%');" || %pause% && goto end
%php% "frpl('%htd_dir%\conf\httpd.conf', '@phpdir@', '%php_dir%');

goto copy_files

:htd_22
rem ���� Apache 2.2
if not exist %htd_dir%\conf\magic copy %htd_dir%\conf\original\magic %htd_dir%\conf /y
if not exist %htd_dir%\conf\mime.types copy %htd_dir%\conf\original\mime.types %htd_dir%\conf /y

copy Pn\conf.default\httpd-2_2.conf %htd_dir%\conf\httpd.conf
%php% "chg_port('%htd_port%');" || %pause% && goto end
%php% "frpl('%htd_dir%\conf\httpd.conf', '@phpdir@', '%php_dir%');
copy Pn\conf.default\httpd-autoindex.conf %htd_dir%\conf\extra /y

:copy_files
if not exist %vhs_cfg% copy Pn\conf.default\httpd-vhosts.conf %vhs_cfg%
if not exist htdocs\index.php copy Pn\index.ph_ htdocs\index.php /y

rem ���� DLL
if %myd_ver%==5.0 (
  rem MySQL 5.0
) else (
  rem MySQL 5.1
  copy Pn\php_mysql-for-MySQL-5.1.dll %php_dir%\ext\php_mysql.dll
)
copy %myd_dir%\bin\libmySQL.dll %php_dir% /y
copy %php_dir%\libmySQL.dll %htd_dir%\bin /y
copy %php_dir%\php5ts.dll %htd_dir%\bin /y
copy %php_dir%\libeay32.dll %htd_dir%\bin /y
copy %php_dir%\ssleay32.dll %htd_dir%\bin /y
%php% "if(PHP_VERSION_ID < 50300) exit(1);" && goto endcpfiles
copy %php_dir%\libmhash.dll %htd_dir%\bin /y
copy %php_dir%\libmcrypt.dll %htd_dir%\bin /y
:endcpfiles

rem ���� PHP
%php% "require_once './Pn/Init.php'; init_phpini();"

rem ���� phpMyAdmin
set pma=htdocs\phpMyAdmin
%php% "cp('%pma%\config.sample.inc.php', '%pma%\config.inc.php');"
%php% "frpl('%pma%/config.inc.php', '\$cfg\[\'blowfish_secret\'\] = \'[^\']*\';', '$cfg[\'blowfish_secret\'] = \'PHPnow-'.md5(time().'-'.mt_rand(0, mt_getrandmax())).'\';');"
%php% "frpl('%pma%/config.inc.php', '\n', `\r\n`);

rem ���� MySQL
if %myd_ver%==5.0 (
  copy Pn\conf.default\my-5_0.ini %myd_dir%\my.ini /y
) else (
  copy Pn\conf.default\my-5_1.ini %myd_dir%\my.ini /y
)
if not exist "%myd_dir%\data\test" mkdir "%myd_dir%\data\test"
%php% "frpl('%myd_dir%\my.ini', '^(port\s*=)\s*\d+', '$1 %myd_port%');"

echo.
echo  ^|    �ļ��������;                                             ^|
echo  ^|______________________________________________________________^|
echo.
if "%1"=="init" goto :eof

echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|    ���ڰ�װ Apache ...                                       ^|
echo.
cd %htd_dir%
bin\%htd_exe% -k install -n %htd_svc%

if errorlevel 2 (
  echo.
  echo  ^|    ��װ���� [ %htd_svc% ] ʧ��. ����ԭ������:                ^|
  echo  ^|    1. �������Ѵ���, ��ж�ػ�ʹ�ò�ͬ�ķ�����.                ^|
  echo  ^|    2. �ǹ���ԱȨ��, ���ܲ��� Windows NT ����.                ^|
  echo  ^|______________________________________________________________^|
  echo.
  cd ..
  %pause%
  goto end
)

if errorlevel 1 (
  echo.
  echo  ^|    ��װ Apache ����ʧ��!                                     ^|
  echo  ^|    ������ֵ���Ϣ�����ڷ�����ԭ��.                           ^|
  echo  ^|______________________________________________________________^|
  echo.
  bin\%htd_exe% -k uninstall -n %htd_svc%
  cd ..
  %pause%
  goto end
)

echo.
echo  ^|    �������� Apache ...                                       ^|

bin\%htd_exe% -k start -n %htd_svc% && goto apache_done
cd ..
echo  ^|    Apache ����ʧ��!                                          ^|
echo  ^|    ������ֵ���Ϣ�����ڷ�����ԭ��.                           ^|
echo  ^|______________________________________________________________^|
echo.
%pause%
goto end

:apache_done
cd ..
if exist %PnCmds%\*.cm_ ren %PnCmds%\*.cm_ *.cmd
echo.
echo  ^|    ���� Apache ���;                                         ^|
echo  ^|______________________________________________________________^|
echo.

echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|    �������� MySQL %myd_ver% ...                                    ^|
echo.

%net% stop %myd_svc%>nul 2>nul
%myd_dir%\bin\%myd_exe% --remove %myd_svc%>nul 2>nul

%myd_dir%\bin\%myd_exe% --install %myd_svc% --defaults-file="%CD%\%myd_dir%\my.ini"
%net% start %myd_svc% || %pause% && goto end

echo  ^|    ���� MySQL %myd_ver% ���;                                      ^|
echo  ^|______________________________________________________________^|
echo.

rem ���� MySQL
%php% "chk_mysql('%myd_port%', 'toor');" && goto mysql_setpwd

if %errorlevel%==1045 (
echo   ______________________________________________________________
echo  ^|                                                              ^|
echo        MySQL root ��ʼ���벻��ȷ. ���� MySQL root ���븴λ.
echo  ^|______________________________________________________________^|
echo.
if exist PnCp.cmd call PnCp.cmd reset_mydpwd && goto done
if exist %PnCmds%\PnCp.cmd call %PnCmds%\PnCp.cmd reset_mydpwd && goto done
)

if %errorlevel%==2003 (
echo   ______________________________________________________________
echo  ^|                                                              ^|
echo        MySQL^(port:%myd_port%^) ����ʧ��.
echo        ���� MySQL û�������ɹ�. �����ܷ���ǽ����.
echo  ^|______________________________________________________________^|
echo.
)

goto done

rem �޸� MySQL root ����
:mysql_setpwd

echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|    ����Ϊ MySQL �� root �û���������. ��Ҫ! ���м�!          ^|
echo  ^|______________________________________________________________^|

set /p my_newpwd= -^> ���� root �û�����: 
echo.

if "%my_newpwd%"=="" goto mysql_setpwd

%myd_dir%\bin\mysqladmin.exe -uroot -ptoor password "%my_newpwd%"

if errorlevel 1 %pause% && goto done

echo   ______________________________________________________________
echo  ^|                                                              ^|
echo        MySQL root �û���������Ϊ "%my_newpwd%" , ���м�!
echo  ^|______________________________________________________________^|
echo.

:done
title ȫ����� - PHPnow.org
echo   ______________________________________________________________
echo  ^|                                                              ^|
echo  ^|    ȫ�����!!  �㽫���Կ��� PHPnow ��Ĭ��ҳ��!               ^|
echo  ^|______________________________________________________________^|
echo.
%pause%
echo.
%php% cfg_bak('backup [��ʼ����]');
title %ComSpec%

start http://127.0.0.1:%htd_port%
if exist Init.cmd PnCp.cmd exec ren Init.cmd *.cm_

:end
prompt