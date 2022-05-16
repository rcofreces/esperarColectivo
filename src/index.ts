let llegadaColectivo: string | null;
llegadaColectivo = prompt("¿LLegó el colectivo? (Y/N)");

while (llegadaColectivo === "N") {
  llegadaColectivo = prompt("¿LLegó el colectivo? (Y/N)");
  console.log("Siga esperando el colectivo");
}
console.log("Ya llegó el colectivo");
