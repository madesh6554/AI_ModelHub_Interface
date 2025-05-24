import React from 'react';
import './ModelCard.css';

function ModelCard({ model }) {
  const handleClick = () => {
    if (model.url) {
      // For Gen AI models, append .html to the URL
      if (model.category === 'Gen AI') {
        window.location.href = `${model.url}.html`;
      } else {
        window.location.href = model.url;
      }
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
