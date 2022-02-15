import { TimeUtils } from '../lib/time.utils';

export type CountdownAction =
  | {
      type: CountdownActionType.UPDATE_DATE;
      birthday: Date;
    }
  | {
      type: CountdownActionType.RECALCULATE;
    };

export enum CountdownActionType {
  UPDATE_DATE = 'UPDATE_DATE',
  RECALCULATE = 'RECALCULATE',
}

export type CountdownState = {
  birthday: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isMyBirthday: boolean;
};

export function countdownContextReducer(
  state: CountdownState,
  action: CountdownAction
): CountdownState {
  switch (action.type) {
    case CountdownActionType.UPDATE_DATE:
      return {
        ...state,
        birthday: action.birthday,
      };
    case CountdownActionType.RECALCULATE:
      const now = new Date();
      const birthday = new Date(state.birthday.getTime());
      /** To calculate the difference of this year birthday */
      birthday.setFullYear(now.getFullYear());

      let missingMiliseconds = birthday.getTime() - now.getTime();
      if (missingMiliseconds < 0) {
        birthday.setFullYear(now.getFullYear() + 1);
        missingMiliseconds = birthday.getTime() - now.getTime();
      }

      const days = TimeUtils.msToDays(missingMiliseconds);
      const hours = TimeUtils.msToHours(missingMiliseconds);
      const minutes = TimeUtils.msToMinutes(missingMiliseconds);
      const seconds = TimeUtils.msToSeconds(missingMiliseconds);

      return {
        ...state,
        days,
        hours,
        minutes,
        seconds,
        isMyBirthday: TimeUtils.isMyBirthday(birthday),
      };
    default:
      return state;
  }
}

export function countdownStateInitializer(): CountdownState {
  const initialGoalDate = new Date(new Date().getTime() + 10000000000);

  return {
    birthday: initialGoalDate,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isMyBirthday: false,
  };
}
