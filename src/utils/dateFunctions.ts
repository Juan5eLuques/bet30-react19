export const ConvertDate = ( fechaOriginal : string) => {

const fecha = new Date(fechaOriginal);
// Extraer las partes de la fecha
const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes (0-indexado, se suma 1)
const dia = String(fecha.getDate()).padStart(2, '0'); // Día
const horas = String(fecha.getHours()).padStart(2, '0'); // Hora (24h)
const minutos = String(fecha.getMinutes()).padStart(2, '0'); // Minutos

return `${mes}/${dia} ${horas}, ${minutos}`

}