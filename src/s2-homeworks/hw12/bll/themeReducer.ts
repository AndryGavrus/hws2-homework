const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdAC): { themeId: number } => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

type changeThemeIdAC = { type: 'SET_THEME_ID', id: number }
export const changeThemeId = (id: number): changeThemeIdAC => ({ type: 'SET_THEME_ID', id }) // fix any
