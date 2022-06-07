import React, { useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import DescriptionImg from './DescriptionImg'

import '../../css/carrocel.css'

const Carrocel = (props) => {
    const { midia } = props;

    return (
        <div className='container-menu'>
            <Gallery>
                {midia.map((item, index) => {
                    return (
                        <Item
                            original={item.url}
                            thumbnail={item.url}
                            width="1024"
                            height="768"
                            key={index.toString()}
                        >
                            {({ ref, open }) => (
                                <div className="container-carrocel">
                                    <img
                                        ref={ref}
                                        onClick={open}
                                        width="256"
                                        height="192"
                                        src={item.url}
                                    />
                                    <div className="centered">
                                        <DescriptionImg desc={item.description} />
                                    </div>
                                </div>
                            )}
                        </Item>
                    )
                })}
            </Gallery>
        </div>
    )
}


export default  Carrocel;
