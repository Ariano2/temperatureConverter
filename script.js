const validateOperation = (temp, conversionType) => {
  const validConversionTypes = ['celsius', 'farenheit'];
  if (!validConversionTypes.includes(conversionType)) return false;
  // now check if temp is a number
  if (isNaN(temp)) return false;
  if (temp === '') return false;
  return true;
};

const celsiusToFarenheit = (temp) => {
  const celsius = (temp - 32) * (5 / 9);
  return celsius;
};

const farenheitToCelsius = (temp) => {
  const farenheit = temp * (9 / 5) + 32;
  return farenheit;
};

const inputBox = document.getElementById('tempInput');
inputBox.addEventListener('keyup', (e) => {
  tempEventCB(e);
});

const tempEventCB = (event) => {
  const temp = event.target.value;
  const conversionType = document.getElementById('conversionType').value;
  // run some validation checks here
  if (!validateOperation(temp, conversionType)) return;
  if (conversionType === 'celsius') {
    console.log(celsiusToFarenheit(temp));
  } else {
    console.log(farenheitToCelsius(temp));
  }
};
