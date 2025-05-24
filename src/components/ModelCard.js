import React from 'react';
import './ModelCard.css';

function ModelCard({ model }) {
  const handleClick = () => {
    if (model.url) {
      window.open(model.url, '_blank');
    }
  };

  return (
    <div className="model-card" onClick={handleClick}>
      <div className="model-header">
        <h3>{model.name}</h3>
        <span className={`category-badge ${model.category.toLowerCase()}`}>
          {model.category}
        </span>
      </div>
      <p className="model-description">{model.description}</p>
    </div>
  );
}

export default ModelCard;
