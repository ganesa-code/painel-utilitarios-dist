ECHO
cd C:\ResWinCs\UtilitariosResulth\utils
call python ./scripts/main.py
call pm2 restart utilitariosResulth
PAUSE