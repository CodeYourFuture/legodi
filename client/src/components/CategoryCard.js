import React from 'react';

function CategoryCard(props){
        return (
           <div className="categories">
              <h2>Title:{props.title}</h2>
              <h3>Full content:{props.fullContent}</h3>
           </div>)
   }
 
export default CategoryCard
 