'use strict';

var WIZARD_NAMES = [['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']];

var WIZARD_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var calculationRandomElement = function () {
  var names = WIZARD_NAMES[0];
  return Math.floor(Math.random() * names.length);
};
var calculationRandomElements = function () {
  var surnames = WIZARD_NAMES[1];
  return Math.floor(Math.random() * surnames.length);
};
  
  
var calculationRandomElement1 = function () {
  return Math.floor(Math.random() * WIZARD_COLORS.length);
};
var calculationRandomElement2 = function () {
  return Math.floor(Math.random() * WIZARD_EYES.length);
};

var wizards = [{
  name: WIZARD_NAMES[0][calculationRandomElement()] + ' ' + WIZARD_NAMES[1][calculationRandomElement()],
  coatColor: WIZARD_COLORS[calculationRandomElement1()],
  eyesColor: WIZARD_EYES[calculationRandomElement2()]
  },
  {
  name: WIZARD_NAMES[0][calculationRandomElement ()] + ' ' + WIZARD_NAMES[1][calculationRandomElement()],
  coatColor: WIZARD_COLORS[calculationRandomElement1()],
  eyesColor: WIZARD_EYES[calculationRandomElement2()] 
  },
  {
  name: WIZARD_NAMES[0][calculationRandomElement()] + ' ' + WIZARD_NAMES[1][calculationRandomElement()],
  coatColor: WIZARD_COLORS[calculationRandomElement1()],
  eyesColor: WIZARD_EYES[calculationRandomElement2()]
  },
  {
  name: WIZARD_NAMES[0][calculationRandomElement()] + ' ' + WIZARD_NAMES[1][calculationRandomElement()],
  coatColor: WIZARD_COLORS[calculationRandomElement1()],
  eyesColor: WIZARD_EYES[calculationRandomElement2()] 
}
];

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);  
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor; 
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');