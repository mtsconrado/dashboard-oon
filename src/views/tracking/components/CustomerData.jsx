import React from 'react';

import '../css/customerData.css'

function CustomerData() {
  return (
    <>
      <label className='font-info-subTitle'>Dados do cliente</label>
      <br />
      <label className='font-info-interTitle'>Nome do cliente</label>
      <br />
      <label className='font-info-content'>Matheus</label>
      <br />

      <label className='font-info-interTitle'>Telefone de contato</label>
      <br />
      <label className='font-info-content'></label>
      <br />
      
      <label className='font-info-interTitle'>Cidade</label>
      <br />
      <label className='font-info-content'></label>
      <br />
      <hr />

      <label className='font-info-subTitle'>Dados do plano</label>
      <br />
      <label className='font-info-interTitle'>Status do cliente</label>
      <br />
      <label className='font-info-content'></label>
      <br />

      <label className='font-info-interTitle'>Status do pagamento</label>
      <br />
      <label className='font-info-content'></label>
      <br />

      <label className='font-info-interTitle'>Expiração do plano</label>
      <br />
      <label className='font-info-content'></label>
    </>
  )
}

export default  CustomerData;
