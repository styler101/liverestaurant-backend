#Definindo a imagem
FROM node:16.16-alphine

# Configurando a linguagem
ENV LC_ALL = C.UTF-8

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiando o arquivo package.json
COPY package*.json

## Copiando tudo para pasta app
COPY . .

# Instalando as dependências

RUN yarn

#Libera a porta do container para execução
EXPOSE 3001

# Inicia a aplicação
CMD yarn dev
