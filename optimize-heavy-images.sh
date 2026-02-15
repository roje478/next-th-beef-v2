#!/bin/bash

# ================================================================
# Script para Re-optimizar Imágenes WebP Pesadas
# ================================================================
#
# Este script re-comprime las imágenes WebP más pesadas (>200KB)
# para mejorar el tiempo de carga.
#
# Requiere: cwebp (Google WebP encoder)
#
# Instalación en macOS:
#   brew install webp
#
# Uso:
#   chmod +x optimize-heavy-images.sh
#   ./optimize-heavy-images.sh
#
# ================================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Verificar cwebp
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: cwebp no está instalado${NC}"
    echo "Instala con: brew install webp"
    exit 1
fi

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Optimización de Imágenes WebP Pesadas${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Crear backup
BACKUP_DIR="public-backup-$(date +%Y%m%d-%H%M%S)"
echo -e "${YELLOW}Creando backup en: $BACKUP_DIR${NC}"
cp -r public "$BACKUP_DIR"
echo ""

optimized=0
total=0
saved_bytes=0

# Función para optimizar
optimize_image() {
    local file="$1"
    local original_size=$(stat -f%z "$file")

    # Solo optimizar si es >200KB
    if [ $original_size -lt 204800 ]; then
        return
    fi

    ((total++))

    # Crear temporal
    local temp="${file}.tmp"

    # Re-comprimir con calidad 75 (más agresivo)
    if cwebp -q 75 "$file" -o "$temp" &>/dev/null; then
        local new_size=$(stat -f%z "$temp")
        local saved=$((original_size - new_size))
        local percent=$((saved * 100 / original_size))

        if [ $saved -gt 0 ]; then
            mv "$temp" "$file"
            ((optimized++))
            saved_bytes=$((saved_bytes + saved))

            echo -e "${GREEN}✓ $(basename $file)${NC}"
            echo -e "  Antes: $(numfmt --to=iec $original_size) → Después: $(numfmt --to=iec $new_size) ${YELLOW}(-${percent}%)${NC}"
        else
            rm "$temp"
        fi
    else
        [ -f "$temp" ] && rm "$temp"
        echo -e "${RED}✗ Error: $(basename $file)${NC}"
    fi
}

# Optimizar imágenes pesadas
echo "Buscando y optimizando imágenes >200KB..."
echo ""

while IFS= read -r -d '' file; do
    optimize_image "$file"
done < <(find public -name "*.webp" -size +200k -print0)

# Resumen
echo ""
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Resumen${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo -e "Imágenes encontradas (>200KB): ${BLUE}$total${NC}"
echo -e "Optimizadas:                   ${GREEN}$optimized${NC}"
echo -e "Espacio ahorrado:              ${GREEN}$(numfmt --to=iec $saved_bytes)${NC}"
echo ""
echo -e "${GREEN}✓ Optimización completada!${NC}"
echo ""
echo "Backup guardado en: $BACKUP_DIR"
echo ""
echo "Próximos pasos:"
echo "1. Prueba tu sitio: pnpm dev"
echo "2. Si todo funciona bien, elimina el backup"
echo "3. Ejecuta: pnpm build"
echo ""
