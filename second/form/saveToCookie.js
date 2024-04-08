function updateWorkshops() {
  const city = document.getElementById('city').value;
  const workshopSelect = document.getElementById('workshop');
  workshopSelect.innerHTML = '';

  if (city === 'city 1') {
    const workshops = ['', 'Цех 1'];
    workshops.forEach(workshop => {
      const option = document.createElement('option');
      option.text = workshop;
      option.value = workshop;
      workshopSelect.add(option);
    });
  } else if (city === 'city 2') {
    const workshops = ['', 'Цех 9'];
    workshops.forEach(workshop => {
      const option = document.createElement('option');
      option.text = workshop;
      option.value = workshop;
      workshopSelect.add(option);
    });
  }
}

function updateEmployees() {
  const workshop = document.getElementById('workshop').value;
  const employeeSelect = document.getElementById('employee');
  employeeSelect.innerHTML = '';

  if (workshop === 'Цех 1') {
    const employees = ['', 'Сотрудник 1', 'Сотрудник 2'];
    employees.forEach(employee => {
      const option = document.createElement('option');
      option.text = employee;
      option.value = employee;
      employeeSelect.add(option);
    });
  } else if (workshop === 'Цех 9') {
    const employees = ['', 'Сотрудник 9', 'Сотрудник 10', 'Сотрудник 11'];
    employees.forEach(employee => {
      const option = document.createElement('option');
      option.text = employee;
      option.value = employee;
      employeeSelect.add(option);
    });
  }
}

function updateTeam() {
  const employee = document.getElementById('employee').value;
  const teamSelect = document.getElementById('team');
  teamSelect.innerHTML = '';

  if (employee === 'Сотрудник 1' || employee === 'Сотрудник 2') {
    const teams = ['Бригада 1', 'Бригада 2'];
    teams.forEach(team => {
      const option = document.createElement('option');
      option.text = team;
      option.value = team;
      teamSelect.add(option);
    });
  } else if (employee === 'Сотрудник 9' || employee === 'Сотрудник 10' || employee === 'Сотрудник 11') {
    const teams = ['Бригада 9', 'Бригада 10', 'Бригада 11'];
    teams.forEach(team => {
      const option = document.createElement('option');
      option.text = team;
      option.value = team;
      teamSelect.add(option);
    });
  }
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function saveToCookie() {
  const city = document.getElementById('city').value;
  const workshop = document.getElementById('workshop').value;
  const employee = document.getElementById('employee').value;
  const team = document.getElementById('team').value;
  const shift = document.getElementById('workingShift').value;

  const formData = {
    city: city,
    workshop: workshop,
    employee: employee,
    team: team,
    shift: shift
  };

  const formDataJSON = JSON.stringify(formData);

  setCookie('form', formDataJSON, { 'max-age': 3600 });
  console.log(document.cookie);
}