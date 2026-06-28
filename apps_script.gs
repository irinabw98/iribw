/*
Google Apps Script para recibir respuestas del cuestionario y guardarlas en tu Google Sheets.

Tu Sheet ya está cargado:
https://docs.google.com/spreadsheets/d/1uPhLxoMIV8A4yspmBfQ2tccEzhDtUpRYXV83n4B3hi8/edit

PASOS:
1) Abrí tu Google Sheet.
2) Extensiones > Apps Script.
3) Pegá este código.
4) Implementar > Nueva implementación > Aplicación web.
5) Ejecutar como: Yo.
6) Quién tiene acceso: Cualquier persona.
7) Copiá la URL que termina en /exec.
8) Pegá esa URL en index.html:
   const GOOGLE_SCRIPT_URL = "TU_URL_DE_APPS_SCRIPT";
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
      "Cierre mostrado"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
    }

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

function formatCorrect(value) {
  if (value === true) return "Sí";
  if (value === false) return "No";
  return "";
}
