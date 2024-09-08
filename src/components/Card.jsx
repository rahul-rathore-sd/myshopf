import React from 'react';
import image from '../assets/images/mentis.jpeg';

function Card({ title, percnt, originalprice, currentprice }) {
    return (
        // card demo syntax
        <div className="card" style={{ width: '15.5rem', height: '' }}>
            <img src={image} style={{ width: '245px', height: '245px' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <span className="card-title" style={{ fontSize: '15px' }}>{title}</span> <br />
                {/* <span className="card-text" style={{fontSize: '15px'}}>T-Shirt Material</span> <br /> */}
                <span style={{ fontSize: '15px' }}>${currentprice} <del>${originalprice}</del> {percnt}% off</span> <br />
                <span style={{ fontSize: '15px' }}>Size: S, M, L, XL,</span>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Card;