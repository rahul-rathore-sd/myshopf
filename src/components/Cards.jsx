import React, { useState } from 'react';
// import image from '../assets/images/mentis.jpeg';
import Card from './Card';


function Cards() {
    // Data array cards values are implemented from here.
    const cardData = [
        {
            title: 'card1',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card2',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card3',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card4',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card5',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card6',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        },
        {
            title: 'card7',
            currentprice: '299',
            originalprice: '299',
            percnt: '20'
        }
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        // main div
        <div className="d-flex" style={{ width: '100%', marginTop:'5px'}}>
            {/* left div */}
            <div className="flex-column" style={{ width: '19%', backgroundColor: '' }}>
                <div className='d-flex flex-column'>
                    {/* <h5 style={{marginLeft:'30px'}}>Filters</h5> */}
                    
                    <br />
                    <div>
                        <h6 style={{marginLeft:'30px'}}>Categories</h6>
                        
                        <ul>
                            <li><a href="#">Mentis</a></li>
                            <hr />
                            <li><a href="#">Baki Hanma</a></li>
                            <hr />
                            <li><a href="#">Iron man</a></li>
                            <hr />
                            <li><a href="#">Jujutsu Kaisen</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* right div */}
            <div className="right" style={{ width: '80%' }}>
                <div className="card-container d-flex flex-wrap">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            currentprice={card.currentprice}
                            originalprice={card.originalprice}
                            percnt={card.percnt}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Cards;