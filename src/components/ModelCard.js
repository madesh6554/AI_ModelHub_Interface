import React from 'react';
import './ModelCard.css';

function ModelCard({ model }) {
  const handleClick = () => {
    if (model.url) {
      if (model.category === 'Gen AI') {
        // For Gen AI models, use the direct path to the HTML file
        const modelName = model.name.replace(/\s+/g, '');
        window.location.href = `/gen-ai/${modelName}.html`;
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
