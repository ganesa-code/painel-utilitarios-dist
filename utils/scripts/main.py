import json
import re

filepath = "C:/ResWinCs/UtilitariosResulth/painel/ip.json"
shortcutFilePath = "C:/ResWinCs/UtilitariosResulth/winstart-browser.bat"

stringIpPattern = r"(?:^|\b(?<!\.))(?:1?\d\d?|2[0-4]\d|25[0-5])(?:\.(?:1?\d\d?|2[0-4]\d|25[0-5])){3}(?=$|[^\w.])"

ipFile = open(filepath)
apiIp = json.load(ipFile)

newIp = ''

while newIp == '':
    newIp = input("Digite o endereço de IP do servidor -> ")
    
    if bool(re.match(stringIpPattern, newIp)) == False:
        print("Digite um endereço de  ipV4 válido. Ex: 192.168.0.1, 10.0.10.1.")
        newIp = ''


with open(shortcutFilePath, "r") as file:
    content = file.read()

    if content.find("localhost") != -1:
        newContent = content.replace("localhost", newIp)
    elif re.findall(stringIpPattern, content, re.IGNORECASE):
        l = []

        def repl(m):
            l.append(m.group(0))
            return newIp

        regex = re.compile(stringIpPattern)
        newContent = regex.sub(repl, content)

with open(shortcutFilePath, "w") as file:
    file.write(newContent)
    file.close()
    
with open(filepath, "w") as file:
    json.dump({"ipServidor": newIp + ':3333'}, file)
    file.close()

print("IP alterado com sucesso! Reiniciando aplicação")



        