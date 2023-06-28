const planets = [
  {name: 'Sun', isPlanet: false},
  {name: 'Mercury', isPlanet: true},
  {name: 'Venus', isPlanet: true},
  {name: 'Earth', isPlanet: true},
  {name: 'Mars', isPlanet: true},
  {name: 'Jupiter', isPlanet: true},
  {name: 'Saturn', isPlanet: true},
  {name: 'Uranus', isPlanet: true},
  {name: 'Neptune', isPlanet: true},
  {name: 'Pluto', isPlanet: false},
];

module.exports = {
  getAll: function() {
    return planets;
  }
};