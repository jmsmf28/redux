export const SAVE_DATA = "SAVE_DATA";

export const saveData = (data: string) => ({
  type: SAVE_DATA,
  payload: data,
});