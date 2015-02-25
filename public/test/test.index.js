var _BLANK_ = "you should fill in the answer here";

describe("Assignment 05 - Fill in the _BLANK_s!", function(){
  
  describe("Numbers", function(){

    it("Addition", function(){
      expect(2 + 3).to.equal(5);
      expect(1.5 + 7.25).to.equal(8.75);
      expect(100 + -50).to.equal(50);
    });

    it("Subtraction", function(){
      expect(6 - 4).to.equal(2);
      expect(4 - 6).to.equal(-2);
      expect(9 - 3.7).to.equal(5.3);
    });

    it("Multiplication", function(){
      expect(3 * 5).to.equal(15);
      expect(2 * -3).to.equal(-6);
      expect(3.2 * 2).to.equal(6.4);
    });

    it("Division", function(){
      expect(16 / 4).to.equal(4);
      expect(7 / 2).to.equal(3.5);
      expect(5.5 / 1.1).to.equal(5);
    });

    it("Modulus", function(){
      expect(5 % 2).to.equal(1);
      expect(6 % 3).to.equal(0);
      expect(27 % 5).to.equal(2);
    });

  });

  describe("Strings", function(){

    it("Length", function(){

      expect("hello".length).to.equal(5);
      expect(("hello, " + "world").length).to.equal(12);

      var sampleString = "test";
      expect(sampleString.length).to.equal(4);

    });

    it("Concatenation", function(){
      expect("hello, " + "world").to.equal("hello, world");
      expect("a" + "b" + "c").to.equal("abc");

      var sampleString = "test";
      expect(sampleString + ", " + sampleString + ", 1, 2, 3").to.equal("test, test, 1, 2, 3");
    });

    it("Trim Whitespace", function(){
      expect(" string stuff ".trim()).to.equal("string stuff");
      expect("    ".trim()).to.equal("");

      var sampleString = " x y z";
      expect(sampleString.trim()).to.equal("x y z");
    });

    it("Substring Searching", function(){
      // Note: "string".substring does something a little different.
      // Let's standardize "string".substr during this class.

      expect("hello, world!".substr(2)).to.equal("llo, world!");
      expect("hello, world!".substr(2, 1)).to.equal("l");
      expect("hello, world!".substr(7, 3)).to.equal("wor");
    });

  });

  describe("Boolean", function(){

    it("Okay, there really isn't much else to do with booleans", function(){

      expect(true).to.equal(true);
      expect(false).to.equal(false);

    });

  });

  describe("Operators", function(){

    it("Strict Equality", function(){

      expect(5 === 5).to.equal(true);
      expect(5 === 3).to.equal(false);
      expect(5 === "5").to.equal(false);

    });

    it("Loose Equality", function(){

      expect(5 == 5).to.equal(true);
      expect(5 == 3).to.equal(false);
      expect(5 == "5").to.equal(true);

    });

    it("Comparison", function(){

      expect(5 > 5).to.equal(false);
      expect(5 >= 5).to.equal(true);
      expect(5 > 3).to.equal(true);
      expect(5 < 3).to.equal(false);

    });

    it("Non-Equality", function(){

      expect(!(5 > 3)).to.equal(false);
      expect(!!(5 > 3)).to.equal(true);
      expect(5 !== "5").to.equal(true);
      expect(5 != "5").to.equal(false);

    });

  });

  describe("Control Flow", function(){

    it("If", function(){

      var result = "nope";
      var sampleString = "hello";

      if (sampleString.length > 3) {
        result = "yep";
      }

      expect(result).to.equal("yep");

      result = 1;

      if (sampleString.substr(1, 1) === "e") {
        result = 2;

        if (sampleString.length === 6) {
          result = 3;
        }
      }

      expect(result).to.equal(2);

    });

    it("If/Else", function(){

      var result;
      var sampleString = "hello";

      if (sampleString == "goodbye") {
        result = 1;
      }
      else {
        result = 2;
      }

      expect(result).to.equal(2);

      result = "";

      if (sampleString.substr(2, 1) === "l") {

        if (sampleString.length === 5) {
          result = 10;
        }
        else {
          result = 20;
        }

      }
      else {

        if (sampleString.length === 5) {
          result = 30;
        }
        else {
          result = 40;
        }

      }

      expect(result).to.equal(10);

    });

    it("For Loops", function(){

      var count = 0;

      for (var i = 0; i < 5; i++) {
        count = count + 2;

        expect(i).to.be.lessThan(5);
      }

      expect(i).to.equal(5);
      expect(count).to.equal(10);

    });

    it("While Loops", function(){

      var count = 0;
      var left = 10;

      while (left >= 1) {
        count = count + 2;
        left = left - 1;

        expect(left).to.be.at.least(0);
      }

      expect(left).to.equal(0);
      expect(count).to.equal(20);

    });

  });

  describe("External Variables", function(){

    it("Values in index.js", function(){

      expect(a).to.equal(42);
      expect(b).to.equal("hello, world");
      expect(c).to.equal(true);
      
      expect(a).to.exist;
      expect(b).to.exist;
      expect(c).to.exist;
      expect(d).to.not.exist;

    });

  });

});