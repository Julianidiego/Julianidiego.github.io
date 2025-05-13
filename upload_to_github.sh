#!/bin/bash
# Script para subir archivos necesarios a GitHub

# Directorio base
BASE_DIR="/home/diego-hernan-juliani/Documentos/Julianidiego.github.io"

# Crear un directorio temporal para los archivos
TEMP_DIR="$BASE_DIR/temp_github_pages"
mkdir -p "$TEMP_DIR"

# Copiar archivos esenciales para GitHub Pages
cp -r "$BASE_DIR"/index.html "$TEMP_DIR"
cp -r "$BASE_DIR"/404.html "$TEMP_DIR"
cp -r "$BASE_DIR"/.nojekyll "$TEMP_DIR"
cp -r "$BASE_DIR"/favicon.ico "$TEMP_DIR"
cp -r "$BASE_DIR"/*.svg "$TEMP_DIR"
cp -r "$BASE_DIR"/_next "$TEMP_DIR"
cp -r "$BASE_DIR"/images "$TEMP_DIR"

echo "Archivos copiados a $TEMP_DIR"
echo "Ahora puedes:"
echo "1. Navegar a $TEMP_DIR"
echo "2. Inicializar un repositorio Git"
echo "3. Subir estos archivos a tu repositorio GitHub"
echo ""
echo "Comandos sugeridos:"
echo "cd $TEMP_DIR"
echo "git init"
echo "git add ."
echo "git commit -m \"Subir archivos para GitHub Pages\""
echo "git remote add origin https://github.com/Julianidiego/SitioWebSecundario.git"
echo "git push -u origin main"
