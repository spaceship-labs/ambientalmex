'use strict';

describe('Service: semarnapi', function () {

  // load the service's module
  beforeEach(module('ambientalmexApp'));

  // instantiate service
  var semarnapi;
  beforeEach(inject(function (_semarnapi_) {
    semarnapi = _semarnapi_;
  }));

  it('should exist', function () {
    semarnapi.should.exist;
  });

});
