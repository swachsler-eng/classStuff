import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([])
  const [recipe, setRecipe] = useState(null)

  // load the list of recipes for the dropdown
  useEffect(() => {
    async function getRecipes() {
      const res = await fetch('/recipes.json')
      setRecipes(await res.json())
    }
    getRecipes()
  }, [])

  // load the chosen recipe
  async function handleChange(e) {
    const id = Number(e.target.value)
    if (id === 0) {
      setRecipe(null)
      return
    }
    const res = await fetch(`/recipes/${id}.json`)
    setRecipe(await res.json())
  }

  return (
    <>
      <h1>Simchas Recipes</h1>
      <p>Welcome to Simchas Recipes!</p>

      <label htmlFor="recipes">Choose a recipe:</label>
      <select name="recipes" id="recipes" onChange={handleChange}>
        <option value="0">Select Recipe</option>
        {recipes.map((r) => (
          <option key={r.id} value={r.id}>{r.name}</option>
        ))}
      </select>

      <div id="recipeDisplay">
        {recipe && (
          <>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.ingredients}</p>
          </>
        )}
      </div>
    </>
  )
}

export default App
