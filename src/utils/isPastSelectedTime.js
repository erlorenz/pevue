function isPastSelectedTime(selectedMillisString) {
  const selected = +selectedMillisString;
  const now = new Date().getTime();

  if (now > selected) return true;

  return false;
}

export default isPastSelectedTime;
