import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const GiftExpertApp = () => {
  
  const [categories, setCategories] = useState(['disney'])

  // const handleAdd = () =>{
  //   const newElement = "Meta";
  //   const adding = categories => [...categories, newElement];
  //   setCategories(adding)
  // };

  return(
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map( category => (
              <GiftGrid 
                category={category}
                key={category}
              />
            )
          )
        }
      </ol>
    </>
  );
};

export {GiftExpertApp};