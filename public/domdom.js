 // Let's define the required varibles such as the number of particles to be created and an array to hold the particles
var particleContainer = document.getElementById('particles');
var Nparticles = 100;
var particles = [];

// function to return a random number from a given min and max
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// This constructor will generate the required information for each particle and it's html structure to be added to the document
function createParticle(i) {
  this.id = i;
  this.width = rand(1, 3) + 'px';
  this.height = this.width;
  this.x = rand(1, 100) + '%';
  // this.delay = 0 + 's';
  // this.duration = rand(1, 60) + 's';
  this.bottom = rand(1, 100) + '%';
  this.html = '<span class="domdom" style=" width: ' + this.width + '; height: ' + this.height + ';bottom: ' + this.bottom + '; left: ' + this.x + '; "></span>';
}

// Let's loop through till we reach the max number of particles and save them to the array and append them to the document
while (particles.length <= Nparticles) {
  var Particle = new createParticle(particles.length);
  particles.push(Particle);
  particleContainer.innerHTML += Particle.html;
}

// Hope you liked it and that has inspired you to create something awesome