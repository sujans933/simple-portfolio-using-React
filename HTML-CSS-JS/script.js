function submitName() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  if (!firstName || !lastName) {
    alert("Please enter both first name and last name");
    return;
  }

  const displayName = document.getElementById("displayName");
  displayName.textContent = `Hello, ${firstName} ${lastName}`;
}
