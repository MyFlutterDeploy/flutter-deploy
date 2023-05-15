#!/bin/bash

file_path="android/app/client_secret.json"
env1="${GOOGLE_PRIVATE_KEY_ID}"
env2="${GOOGLE_PRIVATE_KEY}"
env3="${GOOGLE_CLIENT_EMAIL}"
env4="${GOOGLE_CLIENT_ID}"
env5="${GOOGLE_CERT_URL}"

# Leer contenido del archivo
content=$(<"$file_path")

# Realizar sustitución de texto
updated_content=${content//\#\{GOOGLE_PRIVATE_KEY_ID\}#/$env1}

# Escribir el contenido actualizado de vuelta al archivo
echo "$updated_content" > "$file_path"
