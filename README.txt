# VAR - CHECK DEL DÍA

Versión actualizada según tus cambios.

## Cambios aplicados

- "Chequeo de paz" cambiado por "CHECK DEL DÍA".
- Eliminado el texto descriptivo debajo del título.
- Eliminadas las tarjetas "modo tierno", "sin roja directa", "con dato mundialista".
- Eliminado el pie "Inspirado en fútbol, paciencia, cariño y ganas de estar bien".
- "VAR del corazón" cambiado por "VAR".
- Pregunta 5 actualizada:
  - Que me den un ratito
  - Una charla
  - Que me hagan reír
  - Un mimo
- Agregada pregunta random de Maradona:
  - ¿Contra qué selección hizo el gol de “La Mano de Dios” en México 1986?
  - Respuesta correcta: Inglaterra.
- Final actualizado con tu texto.
- URL de Apps Script ya cargada:
  https://script.google.com/macros/s/AKfycbwfGY4J_OmSRboL30Rgii70mEQBEv_fFOFs7Xsvcy_nSbmpFkK2ouGa4danLqPdm03Ahw/exec

## Importante por la pregunta 7

Como ahora la app tiene 7 preguntas, reemplazá el código de Apps Script por el nuevo `apps_script.gs`.

Después actualizá la implementación:

1. Apps Script.
2. Implementar.
3. Administrar implementaciones.
4. Editar.
5. Nueva versión.
6. Implementar.

Después subí/publicá el `index.html`.


## Cambio de autoenvío

Ahora, al responder la pregunta 7 y tocar `Siguiente`, la app envía las respuestas automáticamente a Google Sheets y después muestra el mensaje final. Ya no aparece ningún botón que diga `Enviar respuestas`.


## URL de Apps Script configurada

Este repo ya tiene cargada esta URL en `index.html`:

https://script.google.com/macros/s/AKfycbwfGY4J_OmSRboL30Rgii70mEQBEv_fFOFs7Xsvcy_nSbmpFkK2ouGa4danLqPdm03Ahw/exec

Flujo actual:
- Pregunta 7.
- Botón `Siguiente`.
- Autoenvío a Google Sheets.
- Pantalla final tierna.
