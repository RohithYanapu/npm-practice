const currentDateElement = document.getElementById('currentDate');

function updateCurrentDate() {
  currentDateElement.textContent = dayjs().format();
}

// Initial update
updateCurrentDate();

// Update every second
setInterval(updateCurrentDate, 1000);
