import { UserType } from "../HW8"

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      const newState = [...state].sort((a, b) => {
        if (action.payload === "up") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return newState; // need to fix
    }

    case "check": {
      return state.filter(pers => pers.age >= action.payload) // need to fix
    }
    default:
      return state
  }
}
