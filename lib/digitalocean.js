var Base = require('./base');
var path = require("path");
var sourceDir = '../source/data/';

function DigitalOcean(options) {
  if (!(this instanceof DigitalOcean)) {
    throw new TypeError("DigitalOcean constructor cannot be called as a function.");
  }

  var dataFile = path.resolve(__dirname, sourceDir, 'digitalocean.json')
  Base.call(this, dataFile, options);
};


DigitalOcean.prototype = Object.create(Base.prototype);


DigitalOcean.prototype.region = function() {
  return this.data['region'];
};


DigitalOcean.prototype.renderRegion = function() {
  return this.render(this.region());
};


DigitalOcean.prototype.size = function() {
  return this.data['size'];
};


DigitalOcean.prototype.renderSize = function() {
  return this.render(this.size());
};


DigitalOcean.prototype.image = function() {
  return this.data['image'];
};


DigitalOcean.prototype.distImage = function() {
  return this.data['image']['dist'];
};


DigitalOcean.prototype.renderDistImage = function() {
  return this.render(this.distImage());
};


DigitalOcean.prototype.appImage = function() {
  return this.data['image']['app'];
};


DigitalOcean.prototype.renderAppImage = function() {
  return this.render(this.appImage());
};


module.exports = DigitalOcean;