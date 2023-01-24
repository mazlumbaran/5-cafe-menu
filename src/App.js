import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const allCategories =['all', ...new Set(items.map((item) => item.category))]
  
  const filteredMenuItems = (category) =>{ 
if (category==='all') {
  setMenuItems(items)
  return
}

    const newMenuItems = items.filter((item)=>item.category===category )
    setMenuItems(newMenuItems)} 


  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] =useState(allCategories)

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filteredMenuItems={filteredMenuItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
