Bienvenido a la documentación del proyecto. Aquí se detallan los pasos necesarios para ejecutar la aplicación.

### CHALLENGE DEMO

Requisitos previos
Asegúrese de tener instalado Docker en su sistema. Si no lo tiene, descargue e instale Docker desde la página oficial: https://docs.docker.com/get-docker/.

## Instalación

### Clone el repositorio a su máquina local:

git clone https://github.com/JFernando12/challenge-demo

### Ejecute el siguiente comando para instalar las dependencias:

npm install

### Ejecute el siguiente comando para construir los contenedores Docker:

docker-compose build

## Ejecución

### Una vez que se han completado los pasos de instalación, ejecute la aplicación utilizando el siguiente comando:

docker-compose up

### El programa creara el archivo output.txt en la raiz del código e imprimirá en consola el hash.
