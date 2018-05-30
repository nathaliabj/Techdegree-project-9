// -------  Alert messages -----------

$('.alert').hide().fadeIn('slow');
$('.alertErrorMsg').hide();
$('.alertError').hide();
$('.alertMsg').hide();
$('.dropdown').hide();

$('.close').click(function(){
  $('.alert').fadeOut('slow');
});

$('.notif').click(function(){
  $('.dropdown').show();
});

$('.closeNotif').click(function(){
  $('.dropdown').fadeOut();
});

// -------  function to display the rigth alert when the sent buttom is clicked  -----------

function messageValidation(event) {
  var user = document.getElementById('user').value;
  var message = document.getElementById('message').value;
  if (user === null || user === "") {
      $('.alertError').fadeIn('slow').delay(1500).fadeOut('slow');
      event.preventDefault(event);
  } else if ( message === null || message === '') {
      $('.alertErrorMsg').fadeIn('slow').delay(1500).fadeOut('slow');
      event.preventDefault(event);
  } else {
      $('.alertMsg').fadeIn('slow').delay(1500).fadeOut('slow');
      $("input[id='user']").val("");
      $('textarea').val("");
      event.preventDefault(event);
  }
}

$('.send-btn').click(function(event){
  messageValidation(event);
});


// ------- Display different line chart on click -------

$('#lineChart-daily').hide();
$('#lineChart-monthly').hide();
$('#lineChart-hourly').hide();
$('.weekly').addClass('target');

$('.weekly').click(function(){
   $(this).addClass('target').siblings().removeClass('target');
   $('#lineChart-weekly').show().siblings().hide();
});

$('.daily').click(function(){
   $(this).addClass('target').siblings().removeClass('target');
   $('#lineChart-daily').show().siblings().hide();
});

$('.hourly').click(function(){
    $(this).addClass('target').siblings().removeClass('target');
    $('#lineChart-hourly').show().siblings().hide();
});

$('.monthly').click(function(){
    $(this).addClass('target').siblings().removeClass('target');
    $('#lineChart-monthly').show().siblings().hide();
});


// ------- User Search *autocomplete* -----------

let users = [
  'Andrea Romero',
  'Brice Corbin',
  'Carolina Wilson',
  'Dale Byrd',
  'Dawn Wood',
  'Dan Oliver',
  'Elise Long',
  'Fannie Thompson',
  'Gabriel Robinson',
  'Halen Dott',
  'Ibrahim White',
  'Jacob Lee',
  'John Stuart',
  'Katarina Gonel',
  'Laura Stuart',
  'Martina Fine',
  'Nataly Pratt',
  'Oscar Cruz',
  'Page Dorev',
  'Quillan Walk',
  'Rachel Ruiz',
  'Sofia Dawston',
  'Theodore Slevos',
  'Ulysses Lovat',
  'Victoria Chambers',
  'Wallace Aziz',
  'Xavier Gomez',
  'Yasmin Andonova',
  'Zac Osbourne'
];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("user"), users);

// ------- Monthly Line Chart -----------

var lineChart = document.getElementById("lineChart-monthly").getContext('2d');
var myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [452, 1300, 1200, 1600, 1000, 2000, 1800, 1100, 1200, 1600, 1300, 1900, 2200],
            backgroundColor: [
                'rgba(226, 227, 245, 0.6)',
            ],
            borderColor: [
                'rgba(153,155,184,1)',
            ],
            borderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});

// ------- Weekly Line Chart -----------

var lineChart = document.getElementById("lineChart-weekly").getContext('2d');
var myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [500, 1000, 1500, 1200, 1600, 2000, 1600, 1900, 1000, 1700, 1900, 2000, 2300],
            backgroundColor: [
                'rgba(226, 227, 245, 0.6)',
            ],
            borderColor: [
                'rgba(153,155,184,1)',
            ],
            borderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});

// ------- Daily Line Chart -----------

var lineChart = document.getElementById("lineChart-daily").getContext('2d');
var myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [452, 1300, 1200, 1600, 1000, 2000, 1800, 1100, 1200, 1600, 1300, 1900, 2200],
            backgroundColor: [
                'rgba(226, 227, 245, 0.6)',
            ],
            borderColor: [
                'rgba(153,155,184,1)',
            ],
            borderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});

// ------- Hourly Line Chart -----------

var lineChart = document.getElementById("lineChart-hourly").getContext('2d');
var myChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [300, 1000, 800, 100, 2000, 1400, 1800, 1000, 700, 1200, 900, 800, 2200],
            backgroundColor: [
                'rgba(226, 227, 245, 0.6)',
            ],
            borderColor: [
                'rgba(153,155,184,1)',
            ],
            borderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});


// -------  Bar Chart -----------


var barChart = document.getElementById("barChart").getContext('2d');
var myChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [70, 120, 170, 140, 220, 200, 100],
            backgroundColor: [
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)',
                'rgba(114, 121, 186, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
        },
        scales: {
            yAxes: [{

                ticks: {
                    beginAtZero:true,
                }
            }]
        }
    }
});

// -------  Doughnut Chart -----------

var doughnutChart = document.getElementById("doughnutChart").getContext('2d');
var myChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: '# of visits',
            lineTension: 0,
            data: [18,12,70],
            backgroundColor: [
                'rgba(145, 198, 148, 1)',
                'rgba(128, 175, 189, 1)',
                'rgba(114, 121, 186, 1)',
            ],
            borderWidth: 0,
        }]
    },
    options: {
      legend: {
        position: "right"
        },
      responsive: true,
      rotation: 4.3,
        scales: {
            yAxes: [{
              display: false,
              gridLines: false
            }],
            yAxes: [{
                display: false,
                gridLines: false,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// -------  Local Storage -----------

const timezone = document.getElementById('timezone');

window.onload = function () {

  if (localStorage) {

    document.getElementById('save').addEventListener('click', function (event) {
      let email = document.getElementById('emailTog').checked;
      localStorage.setItem('emailSetting', email);
      let profile = document.getElementById('profileTog').checked;
      localStorage.setItem('privacySetting', profile);
    });

    if (localStorage.getItem('emailSetting') == 'true') {
      $('#emailTog').prop('checked', true);
    } else {
      $('#emailTog').prop('checked', false);
    }

    if (localStorage.getItem('privacySetting') == 'true') {
      $('#profileTog').prop('checked', true);
    } else {
      $('#profileTog').prop('checked', false);
    }

    timezone.selectedIndex = localStorage.getItem('timezone');

    document.getElementById('settings-form').addEventListener('submit', function (e) {
      localStorage.setItem('timezone', timezone.selectedIndex);
    });
  }
}

// reset local storage 
document.getElementById('cancel').addEventListener('click', function (e) {
e.preventDefault();
localStorage.clear();
$('#timezone').val('');
$('#emailTog').prop('checked', false);
$('#profileTog').prop('checked', false);
});
