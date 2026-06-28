/*
Google Apps Script actualizado para 7 preguntas.

Tu Sheet:
https://docs.google.com/spreadsheets/d/1uPhLxoMIV8A4yspmBfQ2tccEzhDtUpRYXV83n4B3hi8/edit

IMPORTANTE:
Como ahora la app tiene 7 preguntas, reemplazá el código anterior de Apps Script por este
y actualizá la implementación:
Implementar > Administrar implementaciones > Editar > Nueva versión > Implementar.
*/

const SPREADSHEET_ID = "1uPhLxoMIV8A4yspmBfQ2tccEzhDtUpRYXV83n4B3hi8";
const SHEET_NAME = "Respuestas";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    const headers = [
      "Fecha recepción",
      "Fecha app",
      "Nombre",
      "Pregunta 1", "Respuesta 1", "Correcta 1",
      "Pregunta 2", "Respuesta 2", "Correcta 2",
      "Pregunta 3", "Respuesta 3", "Correcta 3",
      "Pregunta 4", "Respuesta 4", "Correcta 4",
      "Pregunta 5", "Respuesta 5", "Correcta 5",
      "Pregunta 6", "Respuesta 6", "Correcta 6",
      "Pregunta 7", "Respuesta 7", "Correcta 7",
      "Cierre mostrado"
    ];

    ensureHeaders(sheet, headers);

    const r = data.respuestas || [];

    sheet.appendRow([
      new Date(),
      data.fecha || "",
      data.nombre || "",
      r[0]?.question || "", r[0]?.answer || "", formatCorrect(r[0]?.isCorrect),
      r[1]?.question || "", r[1]?.answer || "", formatCorrect(r[1]?.isCorrect),
      r[2]?.question || "", r[2]?.answer || "", formatCorrect(r[2]?.isCorrect),
      r[3]?.question || "", r[3]?.answer || "", formatCorrect(r[3]?.isCorrect),
      r[4]?.question || "", r[4]?.answer || "", formatCorrect(r[4]?.isCorrect),
      r[5]?.question || "", r[5]?.answer || "", formatCorrect(r[5]?.isCorrect),
      r[6]?.question || "", r[6]?.answer || "", formatCorrect(r[6]?.isCorrect),
      data.cierre || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    return;
  }

  const range = sheet.getRange(1, 1, 1, headers.length);
  range.setValues([headers]);
  sheet.setFrozenRows(1);
}

function formatCorrect(value) {
  if (value === true) return "Sí";
  if (value === false) return "No";
  return "";
}
