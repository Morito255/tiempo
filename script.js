// La fecha y la hora de la imagen: 29 de septiembre de 2026, 2:09 (hora local).
const startDate = new Date(2026, 8, 29, 2, 9, 0);
const timer = document.querySelector('#timer');
const petalLayer = document.querySelector('.petal-layer');

function dropPetal() {
  const petal = document.createElement('span');
  petal.className = 'falling-petal';
  petal.textContent = ['❀', '✿', '✾'][Math.floor(Math.random() * 3)];
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${22 + Math.random() * 18}px`;
  petal.style.setProperty('--sway', `${Math.random() * 150 - 75}px`);
  petal.style.animationDuration = `${7 + Math.random() * 5}s`;
  petalLayer.append(petal);
  petal.addEventListener('animationend', () => petal.remove(), { once: true });
}

function updateTime() {
  const elapsed = Math.max(0, Date.now() - startDate.getTime());
  const secondsTotal = Math.floor(elapsed / 1000);
  const units = [
    ['días', Math.floor(secondsTotal / 86400)],
    ['horas', Math.floor((secondsTotal % 86400) / 3600)],
    ['minutos', Math.floor((secondsTotal % 3600) / 60)],
    ['segundos', secondsTotal % 60]
  ];
  timer.innerHTML = units.map(([label, value]) =>
    `<div class="time-unit"><span class="time-value">${String(value).padStart(2, '0')}</span><span class="time-label">${label}</span></div>`
  ).join('');
}

updateTime();
setInterval(updateTime, 1000);
setInterval(dropPetal, 520);
for (let i = 0; i < 12; i++) setTimeout(dropPetal, i * 150);
