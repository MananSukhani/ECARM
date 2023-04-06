const moodSelect = document.querySelector('#mood'); 
const comments = document.querySelector('#comments'); 
const submit = document.querySelector('#submit'); 

let responses = []; 

submit.addEventListener('click', () => { 
  const selectedMood = moodSelect.value; 
  const commentsText = comments.value; 
  
  const response = { 
    mood: selectedMood, 
    comments: commentsText, 
    date: new Date() 
  }; 
  
  responses.push(response); 
  
  // Send to backend 
  
  console.log(responses); 
}); 

let canvas = document.createElement('canvas'); 
document.body.appendChild(canvas); 

const ctx = canvas.getContext('2d'); 

let chart; 

window.onload = () => { 
  chart = new Chart(ctx, { 
    type: 'line', 
    data: { 
      labels: responses.map(x => x.date.toDateString()), 
      datasets: [{ 
        label: 'Mood', 
        data: responses.map(x => x.mood), 
        fill: false, 
        borderColor: 'rgb(75, 192, 192)', 
        tension: 0.1 
      }] 
    }, 
    options: { 
      scales: { 
        yAxes: [{ 
          ticks: { 
            beginAtZero: true 
          } 
        }] 
      } 
    } 
  }); 
};