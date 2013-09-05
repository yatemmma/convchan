describe("Convchan", function() {
  
  var convchan;

  beforeEach(function() {
    convchan = new Convchan();
  });
  
  describe("parseURL", function() {
    it("should be return text.", function() {
      convchan.parseUrl('hogehoge');
      expect(convchan.params.prefix).toEqual("hogehoge");
      expect(convchan.params.sufix).toEqual("hogehoge");
    });
  });
});