var Base = require('./base');
var path = require("path");
var sourceDir = '../source/data/';

function AWS(options) {
  if (!(this instanceof AWS)) {
    throw new TypeError("AWS constructor cannot be called as a function.");
  }

  var dataFile = path.join(sourceDir, 'aws.json');
  Base.call(this, dataFile, options);
};


AWS.prototype = Object.create(Base.prototype);


AWS.prototype.ec2Region = function() {
  return this.data['ec2']['region'];
};


AWS.prototype.renderEC2Region = function() {
  return this.render(this.ec2Region());
};


AWS.prototype.ec2Zone = function() {
  return this.data['ec2']['zone'];
};


AWS.prototype.renderEC2Zone = function() {
  return this.render(this.ec2Zone());
};


AWS.prototype.ec2InstanceType = function() {
  return this.data['ec2']['instance-type'];
};


AWS.prototype.renderEC2InstanceType = function() {
  return this.render(this.ec2InstanceType());
};

module.exports = AWS;