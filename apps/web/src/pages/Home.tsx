import RecipeCard from '../components/recipeCard'
import AddRecipeForm from '../components/addRecipeForm'
import { useState } from 'react'

export default function Home() {
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const handleShowAddRecipeForm = () => {
    setShowAddRecipeForm(true);
  }

  const handleCloseAddRecipeForm = () => {
    setShowAddRecipeForm(false);
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleShowAddRecipeForm}>Add Recipe</button>
      {showAddRecipeForm && <AddRecipeForm onClose={handleCloseAddRecipeForm} />}
      <RecipeCard className='w-64 h-64'/>
    </div>
  )
}