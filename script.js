function calculateAge() {
    const dob = document.getElementById("dob").value;
  
    if (!dob) {
      document.getElementById("result").innerText = "Please enter your date of birth.";
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();
  
    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }
  
    document.getElementById("result").innerText = `You are ${age} years old.`;
    calculateDays()
  }
  function calculateDays() {
    const dob = document.getElementById("dob").value;
    const days = document.getElementById("days");

    if (!dob) {
      days.innerText = "Please enter your date of birth.";
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    days.innerText = `You have been alive for ${diffDays.toLocaleString()} days! 🎉`;
  }
  