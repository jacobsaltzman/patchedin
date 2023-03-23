import React from 'react';

function ProjectSearchBar(props) {
  const { handleSearch } = props;

  return (
    <div className="project-search-bar">
      <input type="text" onChange={handleSearch} />
    </div>
  );
}

export default ProjectSearchBar;