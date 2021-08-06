import json

filepath = './painel/_next/static/chunks/pages/_app.js'
filepath2 = './painel/_next/static/chunks/e4dcde3a4c0d411387f20856645ad1c079f8cb41.fabe7a13be82a6673ec2.js'

lastIpFile = open('lastIp.json')
lastIp = json.load(lastIpFile)

with open(filepath, 'r',  encoding="utf8") as file :
    filedata = file.read()

with open(filepath2, 'r', encoding='utf8') as file2:
    filedata2 = file2.read()

newIp = ''

while newIp == '':
    newIp = input("Digite o endereço de IP do servidor -> ")

if filedata.find(lastIp['lastIp']) != -1:
    filedata = filedata.replace(lastIp['lastIp'], newIp)

if filedata2.find(lastIp['lastIp']) != -1:
    filedata2 = filedata2.replace(lastIp['lastIp'], newIp)

with open(filepath, 'w',  encoding="utf8") as file:
   file.write(filedata)

with open(filepath2, 'w',  encoding="utf8") as file2:
   file2.write(filedata2)

with open("lastIp.json", "w") as file:
    json.dump({"lastIp": newIp}, file)
