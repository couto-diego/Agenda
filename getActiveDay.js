function getActiveDay(date) {
    const day = new Date(year, month, date);
    // Usando toLocaleDateString() para exibir o nome do dia em português
    const dayName = day.toLocaleDateString('pt-BR', { weekday: 'short' }); // Exibe o nome do dia em português (abreviado)
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + ' ' + months[month] + ' ' + year;
}
