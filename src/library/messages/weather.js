import { defineMessages } from 'react-intl'

export default defineMessages({
  generateURL: {
    id: 'dynamics.weather.generate-url',
    description: 'Screen where the user can generate a URL',
    defaultMessage: 'Generate URL',
  },
  editBackgrounds: {
    id: 'dynamics.weather.edit-backgrounds',
    description: 'Screen where the user can edit the weather dynamic\'s backgrounds',
    defaultMessage: 'Edit Backgrounds',
  },
  contentType: {
    id: 'dynamics.weather.content-type',
    description: 'Type of weather that will be displayed',
    defaultMessage: 'Content type',
  },
  contentNow: {
    id: 'dynamics.weather.content-type.now',
    description: 'Current weather',
    defaultMessage: 'Now',
  },
  contentForecast: {
    id: 'dynamics.weather.content-type.forecast',
    description: 'Next days weather',
    defaultMessage: 'Forecast',
  },
  contentHourly: {
    id: 'dynamics.weather.content-type.hourly',
    description: 'Next hours weather',
    defaultMessage: 'Hourly',
  },
  contentNational: {
    id: 'dynamics.weather.content-type.national',
    description: 'national weather',
    defaultMessage: 'National',
  },
  language: {
    id: 'dynamics.weather.language',
    description: 'Language in which the weather will be displayed',
    defaultMessage: 'Language',
  },
  autoLanguage: {
    id: 'dynamics.weather.language.auto',
    description: 'Automatic broadcast language',
    defaultMessage: 'Auto',
  },
  APIKey: {
    id: 'dynamics.weather.APIKey',
    description: 'API Key used to authorize the dynamics when playing',
    defaultMessage: 'API Key',
  },
  generatedURL: {
    id: 'dynamics.weather.generated-url',
    description: 'URL generated by the Generate URL screen',
    defaultMessage: 'Generated URL',
  },
  province: {
    id: 'dynamics.weather.province',
    description: 'A canadian province',
    defaultMessage: 'Province',
  },
  city: {
    id: 'dynamics.weather.city',
    description: 'A city',
    defaultMessage: 'City',
  },
  period: {
    id: 'dynamics.weather.period',
    description: 'Period of day used by the weather',
    defaultMessage: 'Time of day',
  },
  morning: {
    id: 'dynamics.weather.period.morning',
    description: 'Morning period of the day',
    defaultMessage: 'Morning',
  },
  day: {
    id: 'dynamics.weather.period.day',
    description: 'When-the-sun-has-risen-up period of the day',
    defaultMessage: 'Day',
  },
  dusk: {
    id: 'dynamics.weather.period.dusk',
    description: 'dusk period of the day',
    defaultMessage: 'Dusk',
  },
  night: {
    id: 'dynamics.weather.period.night',
    description: 'Night period of the day',
    defaultMessage: 'Night',
  },
  allPeriods: {
    id: 'dynamics.weather.period.all',
    description: 'Periods of the day: All of them',
    defaultMessage: 'All',
  },
  selectionMethod: {
    id: 'dynamics.weather.background-selection',
    description: 'Selection method used to select a background by the dynamic',
    defaultMessage: 'Selection method',
  },
  selectionMethodWeather: {
    id: 'dynamics.weather.background-selection.weather',
    description: 'Selecting the background using the current weather',
    defaultMessage: 'Weather',
  },
  selectionMethodRandom: {
    id: 'dynamics.weather.background-selection.random',
    description: 'Selecting the background randomly',
    defaultMessage: 'Random',
  },
  selectionRevertDate: {
    id: 'dynamics.weather.background-selection.revert-date',
    description: 'The revert date is the moment the selection method goes back from random to weather',
    defaultMessage: 'Revert back date',
  },
  allProvinces: {
    id: 'dynamics.weather.province.all',
    description: 'Canadian province: All of them',
    defaultMessage: 'All',
  },
  allCities: {
    id: 'dynamics.weather.cities.all',
    description: 'Province cities: All of them',
    defaultMessage: 'All',
  },
  addCity: {
    id: 'dynamics.weather.cities.add',
    description: 'Province cities: Add a new city to the list',
    defaultMessage: 'Add',
  },
  support: {
    id: 'dynamics.weather.support',
    description: 'Neo support (DCA/FCL/LED/WAL)',
    defaultMessage: 'Support',
  },
  'cloudy': {
    id: 'dynamics.weather.cloudy',
    description: 'Cloudy weather',
    defaultMessage: 'Cloudy',
  },
  'fog': {
    id: 'dynamics.weather.fog',
    description: 'Foggy weather',
    defaultMessage: 'Fog',
  },
  'heavy-rain': {
    id: 'dynamics.weather.heavy-rain',
    description: 'Heavy rain weather',
    defaultMessage: 'Heavy rain',
  },
  'mostly-cloudy': {
    id: 'dynamics.weather.mostly-cloudy',
    description: 'Mostly cloudy weather',
    defaultMessage: 'Mostly Cloudy',
  },
  'mostly-sunny': {
    id: 'dynamics.weather.mostly-sunny',
    description: 'Mostly sunny weather',
    defaultMessage: 'Mostly Sunny',
  },
  'partly-sunny': {
    id: 'dynamics.weather.partly-sunny',
    description: 'Partly sunny weather',
    defaultMessage: 'Partly sunny',
  },
  'rain-and-sun': {
    id: 'dynamics.weather.rain-and-sun',
    description: 'Rain and sun weather',
    defaultMessage: 'Rain and sun',
  },
  'rain': {
    id: 'dynamics.weather.rain',
    description: 'Rainny weather',
    defaultMessage: 'Rain',
  },
  'snow-and-sun': {
    id: 'dynamics.weather.snow-and-sun',
    description: 'Snow and sun weather',
    defaultMessage: 'Snow and sun',
  },
  'snow': {
    id: 'dynamics.weather.snow',
    description: 'Snow weather',
    defaultMessage: 'Snow',
  },
  'storm-clouds': {
    id: 'dynamics.weather.storm-clouds',
    description: 'Storm clouds weather',
    defaultMessage: 'Storm clouds',
  },
  'sunny': {
    id: 'dynamics.weather.sunny',
    description: 'Sunny weather',
    defaultMessage: 'Sunny',
  },
  'thunderstorms': {
    id: 'dynamics.weather.thunderstorms',
    description: 'Thunderstorms weather',
    defaultMessage: 'Thunderstorms',
  },
  addCityWindowTitle: {
    id: 'dynamics.weather.cities.window-title',
    description: 'Province cities: Add a new city to the list',
    defaultMessage: 'Add a city',
  },
  cityName: {
    id: 'dynamics.weather.cities.name',
    description: 'Name of the new city - text field label',
    defaultMessage: 'City name',
  },
  cancel: {
    id: 'dynamics.weather.cities.cancel',
    description: 'Cancel adding a city button',
    defaultMessage: 'Cancel',
  },
  add: {
    id: 'dynamics.weather.cities.window-add',
    description: 'Add a city button',
    defaultMessage: 'Add',
  },
  dropImage: {
    id: 'dynamics.weather.upload-background',
    description: 'Message to tell the user to drop a background here',
    defaultMessage: 'Drop a background here'
  },
  uploading: {
    id: 'dynamics.weather.uploading',
    description: 'Message to tell the user it\'s background is uploading',
    defaultMessage: 'Uploading'
  },
  deleteBackground: {
    id: 'dynamics.weather.delete-background',
    description: 'Delete background caption when hovering a background',
    defaultMessage: 'Remove background',
  }
})
