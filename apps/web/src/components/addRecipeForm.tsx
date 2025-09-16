interface AddRecipeFormProps {
  onClose: () => void
}

export default function AddRecipeForm({ onClose }: AddRecipeFormProps) {
  return (
    <div>
      <div>
        <h2 className='text-2xl font-bold'>Add Recipe</h2>
        <button onClick={onClose} className='text-2xl font-bold'>X</button>
      </div>
      <form>
        <input type="text" placeholder="Recipe Name" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="text" placeholder="Recipe Description" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="number" placeholder="Recipe Prep Time" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="number" placeholder="Recipe Cook Time" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="number" placeholder="Recipe Servings" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="text" placeholder="Recipe Ingredients" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="text" placeholder="Recipe Instructions" className='border-2 border-gray-300 rounded-md p-2' />
        <input type="text" placeholder="Recipe Image" className='border-2 border-gray-300 rounded-md p-2' />
        <button type="submit" className='bg-blue-500 text-white rounded-md p-2'>Submit</button>
      </form>
    </div>
  )
}
