import React from 'react'

function FormatDate({ date }) {
    const dayWeek = {
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado',
    };

    const nameMonth = {
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'Maio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro',
    }

    const week = dayWeek[date.getDay()];
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = nameMonth[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return (
    <span style={{color: '#C4C4C4', fontSize: '14px'}}>{`${week} - ${day} de ${month} ${year} - ${hours}:${minute}`}</span>
  )
}

export default  FormatDate;
