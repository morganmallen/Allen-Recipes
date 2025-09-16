interface RecipeCardProps {
  className?: string
}

export default function RecipeCard({ className }: RecipeCardProps) {
  return (
    <div className={`border-2 border-gray-300 rounded-md p-4 ${className || ''}`}>
      <h1>Recipe Name</h1>
      <img src="https://via.placeholder.com/150" alt="Recipe Image" />
      <p>Recipe Description</p>
      <button>View Recipe</button>
    </div>
  )
}