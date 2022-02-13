export type CountdownAction = {
  type: CountdownActionType.UPDATE_DATE,
  birthday: Date
} | {
  type: CountdownActionType.RECALCULATE,
}  

export enum CountdownActionType {
  UPDATE_DATE = 'UPDATE_DATE',
  RECALCULATE = 'RECALCULATE'
}

export type CountdownState = {
  birthday: Date
  days: number
  hours: number
  minutes: number 
  seconds: number
}

export function countdownContextReducer(state: CountdownState, action: CountdownAction) {
  switch (action.type) {
    case CountdownActionType.UPDATE_DATE:
      return {
        ...state,
        birthday: action.birthday
      };
    case CountdownActionType.RECALCULATE:
      const birthday = new Date(state.birthday.getTime())
      const now = new Date();
      /** To calculate the difference of this year birthday */
      birthday.setFullYear(now.getFullYear());

      const missingMiliseconds = birthday.getTime() - now.getTime();

      const days = Math.floor(missingMiliseconds / 8.64e+7)
      const hours =Math.floor((missingMiliseconds % 8.64e+7) / 3.6e+6)
      const minutes = Math.floor(((missingMiliseconds % 8.64e+7) % 3.6e+6 ) / 60000)
      const seconds = Math.floor((((missingMiliseconds % 8.64e+7) % 3.6e+6 ) % 60000) / 1000)

      return {
        ...state,
        days,
        hours,
        minutes,
        seconds
      }; 
    default:
      return state
  }
}

export function countdownStateInitializer(): CountdownState {
  const initialGoalDate = new Date(new Date().getTime() - 100000000);

  return {
    birthday: initialGoalDate,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
}