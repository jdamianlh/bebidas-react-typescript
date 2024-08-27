import {create} from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import {FavoritesSliceType, createFavoritesSlice} from './favoriteSlice'
import { createNotificacionSlice, NotificationSliceType } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificacionSlice(...a)
})))