// Shared types and utilities
export interface Recipe {
  id: number
  title: string
  description?: string
  prepTime: number
  cookTime: number
  servings: number
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
  ingredients: Ingredient[]
  instructions: Instruction[]
}

export interface Ingredient {
  id: number
  recipeId: number
  name: string
  amount?: string
  unit?: string
  notes?: string
  orderIndex: number
  createdAt: Date
}

export interface Instruction {
  id: number
  recipeId: number
  stepNumber: number
  instruction: string
  createdAt: Date
}

export interface CreateRecipeRequest {
  title: string
  description?: string
  prepTime: number
  cookTime: number
  servings: number
  imageUrl?: string
  ingredients: Omit<Ingredient, 'id' | 'recipeId' | 'createdAt'>[]
  instructions: Omit<Instruction, 'id' | 'recipeId' | 'createdAt'>[]
}

export interface UpdateRecipeRequest extends Partial<CreateRecipeRequest> {
  id: number
}
