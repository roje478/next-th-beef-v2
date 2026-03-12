Analiza los últimos cambios del repositorio git (usa `git diff HEAD` y `git status --short`) y genera un mensaje de commit siguiendo este formato EXACTO:

type: emoji description

Reglas del mensaje:

- type debe ser uno de: feat, fix, refactor, style, docs, perf, test, chore, build, ci, revert
- El emoji debe corresponder al type: feat=✨, fix=🐛, refactor=🎨, style=💄, docs=📝, perf=⚡, test=🧪, chore=🔧, build=📦, ci=🔄, revert=⏪
- La descripción debe ser en inglés, lowercase, concisa (max 72 chars), sin punto final
- Si hay cambios en múltiples áreas, enfócate en el cambio principal

Reglas de exclusión de archivos:
Antes de hacer el commit, analiza cada archivo modificado y EXCLUYE del staging (no los incluyas en `git add`) los archivos que contengan ÚNICAMENTE:

- Cambios de URLs locales (localhost, IPs locales, dominios de desarrollo)
- Cambios de rutas absolutas específicas del entorno local
- Cambios autogenerados por el editor o IDE (.idea, .vscode/settings.json, etc.)
- Cambios en archivos de configuración que solo reflejan diferencias del entorno local (webpack.config.js, .env, wp-config.php, etc.) cuando el único cambio es una URL o path local

Si excluyes archivos, informa al usuario cuáles fueron excluidos y por qué. Ejemplo: "Excluí `webpack.config.js` ya que solo tiene un cambio de URL local."

Pasos a seguir:

1. Ejecuta `git status --short` y `git diff HEAD --stat` para ver los cambios
2. Analiza el diff detallado con `git diff HEAD` para entender QUÉ cambió
3. Identifica archivos que deben ser excluidos según las reglas de exclusión
4. Genera el mensaje de commit siguiendo el formato
5. Muestra: el mensaje generado, los archivos que se incluirán, y los archivos excluidos (si los hay) con su razón
6. Pregunta al usuario: "¿Confirmar commit? (s/e/n)" donde s=confirmar, e=editar, n=cancelar
7. Si confirma, ejecuta `git add` SOLO de los archivos relevantes (no uses `git add -A` si hay exclusiones) y luego `git commit -m "mensaje"`. IMPORTANTE: NO agregues "Co-Authored-By" ni ningún trailer al mensaje de commit
8. Si elige editar, pide el nuevo mensaje y vuelve a pedir confirmación
9. Si cancela, no hagas nada
10. Después de un commit exitoso, pregunta al usuario: "¿Hacer push? (s/n)". Si confirma, ejecuta git push origin <rama-actual>. Si no, simplemente termina.

Ejemplo de output esperado:
📋 Archivos incluidos:
M src/styles/responsive.css
M template-parts/single-product.php
🚫 Archivos excluidos:
webpack.config.js → solo tiene un cambio de URL local
💬 Commit: refactor: 🎨 add mlg breakpoint and adjust single product layout responsiveness
¿Confirmar commit? (s/e/n)
