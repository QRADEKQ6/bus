const busSchedule = [
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '08:05', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '09:30', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '10:35', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '12:30', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '13:50', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '14:45', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '16:00', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '17:20', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '09:30', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '12:00', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Konina(rozwidlenie)', departureTime: '14:15', day: 'sobota' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '06:10', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '07:00', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '07:45', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '08:35', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '10:05', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '11:05', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '12:55', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '14:20', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '15:09', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '17:45', day: 'pon-pt' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '08:00', day: 'sobota' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '10:05', day: 'sobota' },
    { source: 'Konina(rozwidlenie)', destination: 'Mszana Dolna', departureTime: '14:40', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Poręba Koninki', departureTime: '07:35', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Koninki', departureTime: '09:10', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Koninki', departureTime: '11:35', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Koninki', departureTime: '13:30', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Koninki', departureTime: '15:35', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '07:05', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '08:05', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '09:35', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '12:00', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '13:55', day: 'pon-pt' },
    { source: 'Poręba Koninki', destination: 'Mszana Dolna', departureTime: '16:00', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '07:10', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '08:35', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '10:05', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '11:05', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '13:00', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '14:20', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '15:10', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '16:25', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '18:10', day: 'pon-pt' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '08:35', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '11:05', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '13:30', day: 'sobota' },
    { source: 'Mszana Dolna', destination: 'Poręba Górna', departureTime: '15:10', day: 'sobota' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '06:45', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '07:35', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '09:00', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '10:35', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '11:30', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '13:22', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '14:45', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '16:50', day: 'pon-pt' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '09:00', day: 'sobota' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '11:30', day: 'sobota' },
    { source: 'Poręba Górna', destination: 'Mszana Dolna', departureTime: '13:50', day: 'sobota' }
  ];
  
 
  function searchSchedule() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const departureTime = document.getElementById('departure-time').value;
    const day = document.getElementById('day').value;
  
    const filteredSchedule = busSchedule.filter(bus => 
      bus.source === source &&
      bus.destination === destination &&
      bus.departureTime >= departureTime &&
      bus.day === day
    );
  
    displaySchedule(filteredSchedule);
  }
  
  function displaySchedule(schedule) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
  
    if (schedule.length === 0) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'Brak dostępnych połączeń dla wybranych kryteriów.';
      resultsContainer.appendChild(noResultsMessage);
    } else {
      const scheduleList = document.createElement('ul');
  
      schedule.forEach(bus => {
        const listItem = document.createElement('li');
        listItem.textContent = `Godzina odjazdu: ${bus.departureTime}`;
        scheduleList.appendChild(listItem);
      });
  
      resultsContainer.appendChild(scheduleList);
    }
  }
  