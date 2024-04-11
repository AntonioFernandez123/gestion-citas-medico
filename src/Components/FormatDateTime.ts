export const formatDateTime = (dateTime: Date): string => {
    // Obtener componentes de fecha y hora
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1; // Los meses son base 0, así que sumamos 1
    const day = dateTime.getDate();
    const hours = dateTime.getHours() + 2;
    const minutes = dateTime.getMinutes();

    // Formatear a una cadena legible
    return `${day} - ${month} - ${year} a las ${hours}:${minutes}`;
}

