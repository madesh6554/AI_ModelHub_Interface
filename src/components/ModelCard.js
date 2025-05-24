import React from 'react';
import './ModelCard.css';

function ModelCard({ model }) {
  const handleClick = () => {
    if (model.url) {
      // For Gen AI models, use direct navigation with .html extension
      if (model.category === 'Gen AI') {
        const url = model.url.endsWith('.html') ? model.url : `${model.url}.html`;
        window.location.href = url;
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
