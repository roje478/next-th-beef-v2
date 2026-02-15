#!/bin/bash

# ================================================================
# Script para Convertir Imágenes JPG/JPEG/PNG a WebP
# ================================================================
#
# Este script convierte todas las imágenes en el directorio public/
# de formato JPG, JPEG y PNG a WebP manteniendo la estructura.
#
# Requiere: cwebp (Google WebP encoder)
#
# Instalación en macOS:
#   brew install webp
#
# Instalación en Ubuntu/Debian:
#   sudo apt-get install webp
#
# Uso:
#   chmod +x convert-images-to-webp.sh
#   ./convert-images-to-webp.sh
#
# ================================================================

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar si cwebp está instalado
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: cwebp no está instalado${NC}"
    echo ""
    echo "Por favor instala webp primero:"
    echo "  macOS:    brew install webp"
    echo "  Ubuntu:   sudo apt-get install webp"
    exit 1
fi

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Conversión de Imágenes JPG/PNG → WebP${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Contador
total=0
converted=0
skipped=0
errors=0

# Directorio base
BASE_DIR="public"

# Función para convertir imagen
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"

    # Si el archivo webp ya existe, preguntar
    if [ -f "$output_file" ]; then
        echo -e "${YELLOW}⚠ Ya existe: $output_file${NC}"
        ((skipped++))
        return
    fi

    # Convertir
    if cwebp -q 85 "$input_file" -o "$output_file" &>/dev/null; then
        echo -e "${GREEN}✓ Convertido: $output_file${NC}"
        ((converted++))

        # Opcional: Eliminar archivo original (comentado por seguridad)
        # rm "$input_file"
    else
        echo -e "${RED}✗ Error: $input_file${NC}"
        ((errors++))
    fi
}

# Buscar y convertir todas las imágenes JPG/JPEG/PNG
echo "Buscando imágenes en $BASE_DIR..."
echo ""

# JPG
while IFS= read -r -d '' file; do
    ((total++))
    convert_image "$file"
done < <(find "$BASE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0)

# PNG
while IFS= read -r -d '' file; do
    ((total++))
    convert_image "$file"
done < <(find "$BASE_DIR" -type f -iname "*.png" -print0)

# Resumen
echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Resumen de Conversión${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo -e "Total de imágenes encontradas: ${BLUE}$total${NC}"
echo -e "Convertidas exitosamente:      ${GREEN}$converted${NC}"
echo -e "Ya existían (omitidas):        ${YELLOW}$skipped${NC}"
echo -e "Errores:                       ${RED}$errors${NC}"
echo ""

# Calcular espacio ahorrado (aproximado)
if [ $converted -gt 0 ]; then
    echo -e "${GREEN}✓ Conversión completada!${NC}"
    echo ""
    echo "Próximos pasos:"
    echo "1. Verifica que las imágenes WebP se vean correctamente"
    echo "2. Si todo está bien, puedes eliminar las imágenes originales JPG/PNG"
    echo "3. Ejecuta 'pnpm build' para verificar el build"
    echo ""
    echo "Para eliminar imágenes originales (CUIDADO):"
    echo "  find public -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -delete"
else
    echo -e "${YELLOW}No se convirtieron imágenes nuevas${NC}"
fi

echo ""
