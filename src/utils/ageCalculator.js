function daysInMonth(year, month) {
  if (month === 2) {
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeapYear ? 29 : 28;
  }

  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

export function validateBirthDate(birthDate, today) {
  const errors = {};
  const day = Number(birthDate.day);
  const month = Number(birthDate.month);
  const year = Number(birthDate.year);

  if (!birthDate.day.trim()) errors.day = "This field is required";
  else if (!/^\d+$/.test(birthDate.day) || day < 1 || day > 31) {
    errors.day = "Must be a valid day";
  }

  if (!birthDate.month.trim()) errors.month = "This field is required";
  else if (!/^\d+$/.test(birthDate.month) || month < 1 || month > 12) {
    errors.month = "Must be a valid month";
  }

  if (!birthDate.year.trim()) errors.year = "This field is required";
  else if (!/^\d+$/.test(birthDate.year) || year < 1) {
    errors.year = "Must be a valid year";
  } else if (year > today.getFullYear()) {
    errors.year = "Must be in the past";
  }

  if (errors.day || errors.month || errors.year) return errors;

  if (day > daysInMonth(year, month)) {
    errors.day = "Must be a valid date";
  } else if (
    year === today.getFullYear() &&
    (month > today.getMonth() + 1 ||
      (month === today.getMonth() + 1 && day > today.getDate()))
  ) {
    errors.day = "Must be in the past";
  }

  return errors;
}

export function calculateAge(birthDate, today) {
  const birthDay = Number(birthDate.day);
  const birthMonth = Number(birthDate.month);
  const birthYear = Number(birthDate.year);
  let years = today.getFullYear() - birthYear;
  let months = today.getMonth() + 1 - birthMonth;
  let days = today.getDate() - birthDay;

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}
