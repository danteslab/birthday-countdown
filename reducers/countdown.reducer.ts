export type CountdownState = {
  birthday: Date
  dd: number
  hh: number
  mm: number
  ss: number
}

export type CountdownAction = {
  type: CountdownActionType
  payload?: object | any
}

export enum CountdownActionType {
  UPDATE_DATE = 'UPDATE_DATE',
}

export function countdownContextReducer(state: CountdownState, action: CountdownAction) {
  switch (action.type) {
    case CountdownActionType.UPDATE_DATE:


      return state;
    default:
      return state
  }
}

export function countdownStateInitializer(): CountdownState {
  const initialGoalDate = new Date(new Date().getTime() - 100000);

  return {
    birthday: initialGoalDate,
    dd: 12,
    hh: 12,
    mm: 22,
    ss: 29
  }
}