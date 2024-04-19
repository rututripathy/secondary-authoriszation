document.getElementById('generateOtpBtn')?.addEventListener('click', function() {
  fetch('http://localhost:3000/get-otp')
      .then(response => response.text())
      .then(otp => {
          let OTP = JSON.parse(otp)
          document.getElementById('otpDisplay').textContent = `Your OTP is ${OTP.otp}`;
      })
      .catch(error => {
          console.error('Error fetching OTP:', error);
      });
});

document.getElementById('validateOtpBtn')?.addEventListener('click', function() {
  const otp = document.getElementById('otpInput').value;
  fetch('http://localhost:3000/validate-otp', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ otp })
  })
  .then(response => response.json())
  .then(result => {
      if (result.isValid) {
          document.getElementById('validationResult').textContent = "OTP is authenticated";
      } else {
          document.getElementById('validationResult').textContent = "OTP expired or incorrect";
      }
  })
  .catch(error => {
      console.error('Error validating OTP:', error);
  });
});
