interface AddRecipeFormProps {
  onClose: () => void
  className?: string
}

export default function AddRecipeForm({
  onClose,
  className,
}: AddRecipeFormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div
        className={`relative bg-white border-2 border-gray-300 rounded-md p-4 space-y-4 max-w-md w-full mx-4 ${className || ''}`}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Add Recipe</h2>
          <button onClick={onClose} className="text-2xl font-bold">
            X
          </button>
        </div>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Recipe Name"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Recipe Description"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            placeholder="Recipe Prep Time"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            placeholder="Recipe Cook Time"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            placeholder="Recipe Servings"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Recipe Ingredients"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Recipe Instructions"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Recipe Image"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
