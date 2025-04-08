import { useState } from 'react';

function CategoryFilter({ categories, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('todos');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filters" role="group" aria-label="Filtros de categoria">
      <button 
        className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`} 
        onClick={() => handleFilterClick('todos')}
        data-filter="todos"
      >
        Todos
      </button>
      
      {categories.map((category) => (
        <button 
          key={category.id}
          className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`} 
          onClick={() => handleFilterClick(category.id)}
          data-filter={category.id}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;