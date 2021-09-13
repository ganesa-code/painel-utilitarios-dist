ECHO
call pm2 stop utilitariosResulth
call git clone https://github.com/ganesa-code/painel-utilitarios-dist C:\ResWinCs\temp\
xcopy "C:\ResWinCs\temp" "C:\ResWinCs\UtilitariosResulth" /h /c /k /e /r /y
rd /s /q C:\ResWinCs\temp
cd C:\ResWinCs\UtilitariosResulth
call npm install
call pm2 "start" utilitariosResulth
PAUSE