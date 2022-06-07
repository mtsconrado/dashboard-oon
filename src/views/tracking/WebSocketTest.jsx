import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';


const socketTeste = () =>{

    const [numero, setNumero] = useState(0)
    const [value, setValue]  = useState()
        const { lastJsonMessage, sendMessage } = useWebSocket('ws://localhost:40510', {
        onOpen: () => console.log(`Connected to App WS`),
        onMessage: () => {
            if (lastJsonMessage) {
            console.log(lastJsonMessage);
            setValue(lastJsonMessage)
            setNumero(lastJsonMessage.n);
            }
        },
        onError: (event) => { console.error(event); },
        shouldReconnect: (closeEvent) => true,
        reconnectInterval: 1000
        });

    return (
        <>
            <h2>Testando socket web {numero} depois  {value} </h2>
        </>
    )
}

export default  socketTeste