export const convertPriceToEu = (number) => {
     var newConvertPrice = Number(number).toLocaleString("es-ES", { minimumFractionDigits: 2 });
     return newConvertPrice; 
}