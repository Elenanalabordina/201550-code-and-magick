'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // тень;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Cписок результатов: ', 150, 60);
  
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  var histogramWidth = 150;//высота гистограммы px;
  var step = histogramWidth / (max - 0);//пропорция  px;
  var barWidth = 40;//ширина столбца px; 
  var indent = barWidth + 50;//расстояние между столбцами px;
  var initialX = 180;//координата х px;  
  var initialY = 240;//координата у px;  
  var lineHeight = 15;// расстояние м/у столбиками и текстом px;
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }    
    ctx.fillRect(initialX + indent * i, initialY, -barWidth, -times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.floor(times[i]), (initialX + indent * i) - barWidth, initialY - (times[i] * step + lineHeight));
    ctx.fillText(names[i], (initialX + indent * i) - barWidth, initialY + lineHeight);
  }
};
