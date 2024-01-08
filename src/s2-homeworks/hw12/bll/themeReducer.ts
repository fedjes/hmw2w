const initState:initialStateType = {
    themeId: 1,
}

type initialStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeTypeAC): initialStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
export type changeTypeAC = ReturnType<typeof changeThemeId>