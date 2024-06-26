import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import video from './food.mp4';


function App() {

  const MY_ID = "1892573f";
  const MY_KEY = "078cb96d8d0c34f4d5fcea7614097300";

  const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect (()=> {
    const getRecipe = async() => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])  

  const myRecipeSearch = (e) => {
    console.log(e.target.value)
    setMySearch(e.target.value)
  }
  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }
  return (
    <div className="App">
      
      <div className='container'>
        <video autoPlay muted loop>
        <source src={video} type ="video/mp4"/>
        </video>
      <h1>Find a recipe</h1>
    </div>

    <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' onChange={myRecipeSearch} placeholder='Search...' value = {mySearch}/>
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>


{myRecipes.map((element, index) => (
  <MyRecipesComponent key = {index}   
  transfer ={element.recipe.label} 
  image ={element.recipe.image} 
  calories = {element.recipe.calories} 
  ingredients = {element.recipe.ingredientLines} 
  cautions = {element.recipe.cautions}
  />
)

)}



    </div>
  );
}

export default App;
