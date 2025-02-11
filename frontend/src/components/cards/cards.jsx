import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css';
import outdo from '/plant/outdoor.jpg';
import indo from '/plant/indoor.webp';
import accs from '/plant/accs.webp';
import fert from '/plant/fertilizer.jpg';
import seeds from '/plant/seeds.jpg';

const Cards = () => {
  const categories = [
    { name: "INDOOR", img: indo, category: "indoor" },
    { name: "OUTDOOR", img: outdo, category: "outdoor" },
    { name: "SEEDS", img: seeds, category: "seeds" },
    { name: "FERTILIZERS", img: fert, category: "fertilizers" },
    { name: "ACCESSORIES", img: accs, category: "accessories" }
  ];

  return (
    <div className="cards">
      {categories.map((category, index) => (
        <Link 
          to={`/products?category=${category.category}`} 
          key={index} 
          className="card-link"
        >
          <div>
            <div className='ball'>
              <img src={category.img} alt={category.name} style={{ height: '80px' }} />
            </div>
            <h4>{category.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
