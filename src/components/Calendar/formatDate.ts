export const formatDate = (year: number, month: number, day: number, splitCharacter: string) => {
  const formattedMonth = month.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");
  return `${year}${splitCharacter}${formattedMonth}${splitCharacter}${formattedDay}`;
};
