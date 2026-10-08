import { useState } from "react";
import { calculateAge, validateBirthDate } from "../utils/ageCalculator";

const emptyDate = { day: "", month: "", year: "" };

export default function useAgeCalculator() {
  const [birthDate, setBirthDate] = useState(emptyDate);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function updateField(field, value) {
    const updatedDate = { ...birthDate, [field]: value };
    setBirthDate(updatedDate);
    setResult(null);

    if (hasSubmitted) {
      setErrors(validateBirthDate(updatedDate, new Date()));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasSubmitted(true);

    const today = new Date();
    const validationErrors = validateBirthDate(birthDate, today);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setResult(null);
      return;
    }

    setResult(calculateAge(birthDate, today));
  }

  return { birthDate, errors, result, updateField, handleSubmit };
}
