import React from 'react'

import '../../css/description.css'

const DescriptionImg = (props) => {
    const { desc } = props;

    if (desc == 'ADDRESS') {
        return (<p className='text'>Endereço</p>)
    } else if (desc == 'CAR_DOCUMENT') {
        return (<p className='text'>Documento do carro</p>)
    } else if (desc == 'CNH') {
        return (<p className='text'>CNH</p>)
    } else if (desc == 'BACK') {
        return (<p className='text'>Atrás</p>)
    } else if (desc == 'BACK_LEFT') {
        return (<p className='text'>Traseira esquerda</p>)
    } else if (desc == 'BACK_RIGHT') {
        return (<p className='text'>Traseira direita</p>)
    } else if (desc == 'CHASSIS') {
        return (<p className='text'>Chassi</p>)
    } else if (desc == 'FRONT') {
        return (<p className='text'>Frente</p>)
    } else if (desc == 'LEFT') {
        return (<p className='text'>Lat. Esquerda</p>)
    } else if (desc == 'PANEL') {
        return (<p className='text'>Painel</p>)
    } else if (desc == 'RIGHT') {
        return (<p className='text'>Lat. Direita</p>)
    } else if (desc == 'MOTOR') {
        return (<p className='text'>Motor</p>)
    }
}

export default  DescriptionImg;
