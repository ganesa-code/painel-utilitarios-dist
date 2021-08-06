import json

filepath = './painel/_next/static/chunks/pages/_app.js'

lastIpFile = open('lastIp.json')
lastIp = json.load(lastIpFile)

with open(filepath, 'r',  encoding="utf8") as file :
    filedata = file.read()

newIp = input("Digite o endereço de IP do servidor -> ")

filedata = filedata.replace(lastIp['lastIp'], newIp)

with open(filepath, 'w',  encoding="utf8") as file:
   file.write(filedata)

with open("lastIp.json", "w") as file:
    json.dump({"lastIp": newIp}, file)
