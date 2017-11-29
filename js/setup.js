'use strict';
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var FIRST_NAMES_LENGTH = FIRST_NAMES.length;
var LAST_NAMES_LENGTH = LAST_NAMES.length;
var COAT_COLORS_LENGTH = COAT_COLORS.length;
var EYES_COLORS_LENGTH = EYES_COLORS.length;
var FIREBALL_COLORS_LENGTH = FIREBALL_COLORS.length;
var ESC_CODE = 27;
var ENTER_CODE = 13;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizardForm = setup.querySelector('.setup-wizard-form');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  setup.classList.remove('hidden');
  setupClose.addEventListener('click', onSetupCloseClick);
  setupClose.addEventListener('keydown', onSetupClosePress);
  document.addEventListener('keydown', onSetupEscPress);
  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onWizardFireballClick);
  setupWizardForm.addEventListener('submit', onSetupWizardFormSubmit);
};

var closePopup = function () {
  setup.classList.add('hidden');
  setupClose.removeEventListener('click', onSetupCloseClick);
  setupClose.removeEventListener('keydown', onSetupClosePress);
  document.removeEventListener('keydown', onSetupEscPress);
  wizardCoat.removeEventListener('click', onWizardCoatClick);
  wizardEyes.removeEventListener('click', onWizardEyesClick);
  wizardFireball.removeEventListener('click', onWizardFireballClick);
  setupWizardForm.removeEventListener('submit', onSetupWizardFormSubmit);
};

var onSetupOpenClick = function () {
  openPopup();
};

var onSetupOpenIconPress = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openPopup();
  }
};

var onSetupCloseClick = function () {
  closePopup();
};

var onSetupClosePress = function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closePopup();
  }
};

var onSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE) {
    var wizardName = setup.querySelector('.setup-user-name');
    if (wizardName !== document.activeElement) {
      closePopup();
    }
  }
};

var onSetupWizardFormSubmit = function () {
  closePopup();
};

var onWizardCoatClick = function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomInt(0, COAT_COLORS_LENGTH)];
};

var onWizardEyesClick = function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomInt(0, EYES_COLORS_LENGTH)];
};

var onWizardFireballClick = function () {
  wizardFireball.style.backgroundColor = FIREBALL_COLORS[getRandomInt(0, FIREBALL_COLORS_LENGTH)];
};

setupOpen.addEventListener('click', onSetupOpenClick);
setupOpen.addEventListener('keydown', onSetupOpenIconPress);

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var shuffle = function (arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    var randomIndex = getRandomInt(0, i);
    var temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

var createWizardsArray = function (number) {
  var wizards = [];
  var shuffledFirstNames = shuffle(FIRST_NAMES.slice(0));
  var shuffledLastNames = shuffle(LAST_NAMES.slice(0));
  var shuffledCoatColors = shuffle(COAT_COLORS.slice(0));
  var shuffledEyesColor = shuffle(EYES_COLORS.slice(0));
  for (var i = 0; i < number; i++) {
    var wizard = {};
    wizard.name = shuffledFirstNames[i % FIRST_NAMES_LENGTH] + ' ' + shuffledLastNames[i % LAST_NAMES_LENGTH];
    wizard.coatColor = shuffledCoatColors[i % COAT_COLORS_LENGTH];
    wizard.eyesColor = shuffledEyesColor[i % EYES_COLORS_LENGTH];
    wizards[i] = wizard;
  }
  return wizards;
};

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  return wizardElement;
};

var renderWizards = function () {
  var wizards = createWizardsArray(4);
  var fragment = document.createDocumentFragment();
  wizards.forEach(function (item) {
    fragment.appendChild(createWizardElement(item));
  });
  var similarListElement = setup.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards();