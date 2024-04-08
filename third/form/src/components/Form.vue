<template>
  <div>
    <h1>Форма с использованием vue.js</h1>
    <form @submit.prevent="saveToCookie" style="width: 300px; border: 1px solid white; display: flex; flex-direction: column; padding: 10px; align-items: flex-start; margin: 0 auto;">
      <div>
        <label for="city">Город:</label>
        <select v-model="city" @change="updateWorkshops">
          <option></option>
          <option value="city1">Нижний Новгород</option>
          <option value="city2">Москва</option>
        </select>
      </div>
      <br>

      <div>
        <label for="workshop">Цех:</label>
        <select v-model="workshop" @change="updateEmployees">
          <option v-for="option in workshopOptions" :value="option">{{ option }}</option>
        </select>
      </div>
      <br>

      <div>
        <label for="employee">Сотрудник:</label>
        <select v-model="employee" @change="updateTeam">
          <option v-for="option in employeeOptions" :value="option">{{ option }}</option>
        </select>
      </div>
      <br>

      <div>
        <label for="team">Бригада:</label>
        <select v-model="team">
          <option v-for="option in teamOptions" :value="option">{{ option }}</option>
        </select>
      </div>
      <br>

      <div>
        <label for="shift">Смена:</label>
        <select v-model="shift">
          <option value="shift1">Смена 1</option>
          <option value="shift2">Смена 2</option>
        </select>
      </div>
      <br>

      <button type="submit">Сохранить в Cookie</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const city = ref<string>('');
const workshop = ref<string>('');
const employee = ref<string>('');
const team = ref<string>('');
const shift = ref<string>('');
const workshopOptions = ref<string[]>([]);
const employeeOptions = ref<string[]>([]);
const teamOptions = ref<string[]>([]);

const updateWorkshops = () => {
  if (city.value === 'city1') {
    workshopOptions.value = ['Цех 1'];
  } else if (city.value === 'city2') {
    workshopOptions.value = ['Цех 2'];
  }
}

const updateEmployees = () => {
  if (workshop.value === 'Цех 1') {
    employeeOptions.value = ['Сотрудник 1', 'Сотрудник 2', 'Сотрудник 3'];
  } else if (workshop.value === 'Цех 2') {
    employeeOptions.value = ['Сотрудник 9', 'Сотрудник 10', 'Сотрудник 11'];
  }
}

const updateTeam = () => {
  if (employee.value === 'Сотрудник 1' || employee.value === 'Сотрудник 9' || employee.value === 'Сотрудник 2') {
    teamOptions.value = ['Бригада 1', 'Бригада 2', 'Бригада 3'];
  } else if (employee.value === 'Сотрудник 3' || employee.value === 'Сотрудник 10' || employee.value === 'Сотрудник 11') {
    teamOptions.value = ['Бригада 10', 'Бригада 11', 'Бригада 12'];
  }
}

const setCookie = (name: string, value: string, options: any = {}) => {
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

const saveToCookie = () => {
  const formData = {
    city: city.value,
    workshop: workshop.value,
    employee: employee.value,
    team: team.value,
    shift: shift.value
  };

  const formDataJSON = JSON.stringify(formData);

  setCookie('form', formDataJSON, { 'max-age': 3600 });
  console.log(document.cookie);
}
</script>

<style scoped>

</style>