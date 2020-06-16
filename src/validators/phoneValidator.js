export default (phone) => {
  if (!phone) {
    return 'This field is required';
  }
  if (phone.match(/\D/g)) {
    return 'Must have only digits';
  }
  return phone.length === 10 ? '' : 'Must be 10 digits';
};
