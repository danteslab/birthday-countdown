export namespace TimeUtils {
  export function msToDays(ms: number): number {
    return Math.floor(ms / 8.64e7);
  }

  export function msToHours(ms: number): number {
    return Math.floor((ms % 8.64e7) / 3.6e6);
  }

  export function msToMinutes(ms: number): number {
    return Math.floor(((ms % 8.64e7) % 3.6e6) / 60000);
  }

  export function msToSeconds(ms: number): number {
    return Math.floor((((ms % 8.64e7) % 3.6e6) % 60000) / 1000);
  }

  export function hoursToMs(hours: number): number {
    return  hours * 3.6e+6;
  }

  export function isMyBirthday(date: Date): boolean {
    const today = new Date();

    /** Compare based on mm/dd format */
    return (
      today.toLocaleDateString().substring(0, 5) === date.toLocaleDateString().substring(0, 5)
    );
  }
}
