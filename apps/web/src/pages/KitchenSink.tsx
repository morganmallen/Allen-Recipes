import RecipeCard from '../components/RecipeCard'
import AddRecipeForm from '../components/AddRecipeForm'
import { useState } from 'react'

export default function KitchenSink() {
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const handleShowAddRecipeForm = () => {
    setShowAddRecipeForm(true);
  }

  const handleCloseAddRecipeForm = () => {
    setShowAddRecipeForm(false);
  }

  return (
    <div>
      <h1>KitchenSink</h1>
      <button onClick={handleShowAddRecipeForm}>Add Recipe</button>
      {showAddRecipeForm && <AddRecipeForm onClose={handleCloseAddRecipeForm} />}
      <RecipeCard className='w-64 h-64'/>
    </div>
  )
}