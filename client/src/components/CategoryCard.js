import React from 'react';

function CategoryCard(props){
        return (
           <div className="categories">

              <h2>Title:{props.category.title}</h2>
              <h3>Full content:{props.category.fullContent}</h3>

           </div>)
   }
 
export default CategoryCard
 