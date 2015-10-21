var Base = require('./base');
var path = require("path");
var sourceDir = '../source/data/';

function GCloud(options) {
  if (!(this instanceof GCloud)) {
    throw new TypeError("GCloud constructor cannot be called as a function.");
  }

  var dataFile = path.join(sourceDir, 'gcloud.json');
  Base.call(this, dataFile, options);
};


GCloud.prototype = Object.create(Base.prototype);


GCloud.prototype.gceZone = function() {
  return this.data['gce']['zone'];
};


GCloud.prototype.renderGCEZone = function() {
  return this.render(this.gceZone());
};


GCloud.prototype.gceMachineType = function() {
  return this.data['gce']['machine_type'];
};


GCloud.prototype.renderGCEMachineType = function() {
  return this.render(this.gceMachineType());
};


GCloud.prototype.gceDiskType = function() {
  return this.data['gce']['disk_type'];
};


GCloud.prototype.renderGCEDiskType = function() {
  return this.render(this.gceDiskType());
};


GCloud.prototype.gceImage = function() {
  return this.data['gce']['image'];
};


GCloud.prototype.renderGCEImage = function() {
  return this.render(this.gceImage());
};


module.exports = GCloud;