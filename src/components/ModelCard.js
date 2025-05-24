import React from 'react';
import './ModelCard.css';

function ModelCard({ model }) {
  const handleClick = () => {
    if (model.url) {
      // Add .html extension for Gen AI pages
      const url = model.url.includes('/gen-ai/') ? `${model.url}.html` : model.url;
      window.location.href = url;
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
