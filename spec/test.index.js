var _BLANK_ = "you should fill in the answer here";

describe("Assignment 05 - Fill in the _BLANK_s!", function(){
  
  describe("Numbers", function(){

    it("Addition", function(){
      expect(2 + 3).toEqual(5);
      expect(1.5 + 7.25).toEqual(8.75);
      expect(100 + -50).toEqual(50);
    });

    it("Subtraction", function(){
      expect(6 - 4).toEqual(2);
      expect(4 - 6).toEqual(-2);
      expect(9 - 3.7).toEqual(5.3);
    });

    it("Multiplication", function(){
      expect(3 * 5).toEqual(15);
      expect(2 * -3).toEqual(-6);
      expect(3.2 * 2).toEqual(6.4);
    });

    it("Division", function(){
      expect(16 / 4).toEqual(4);
      expect(7 / 2).toEqual(3.5);
      expect(5.5 / 1.1).toEqual(5);
    });

    it("Modulus", function(){
      expect(5 % 2).toEqual(1);
      expect(6 % 3).toEqual(0);
      expect(27 % 5).toEqual(2);
    });

  });

  describe("Strings", function(){

    it("Length", function(){

      expect("hello".length).toEqual(5);
      expect(("hello, " + "world").length).toEqual(12);

      var sampleString = "test";
      expect(sampleString.length).toEqual(4);

    });

    it("Concatenation", function(){
      expect("hello, " + "world").toEqual("hello, world");
      expect("a" + "b" + "c").toEqual("abc");

      var sampleString = "test";
      expect(sampleString + ", " + sampleString + ", 1, 2, 3").toEqual("test, test, 1, 2, 3");
    });

    it("Trim Whitespace", function(){
      expect(" string stuff ".trim()).toEqual("string stuff");
      expect("    ".trim()).toEqual("");

      var sampleString = " x y z";
      expect(sampleString.trim()).toEqual("x y z");
    });

    it("Substring Searching", function(){
      // Note: "string".substring does something a little different.
      // Let's standardize "string".substr during this class.

      expect("hello, world!".substr(2)).toEqual("llo, world!");
      expect("hello, world!".substr(2, 1)).toEqual("l");
      expect("hello, world!".substr(7, 3)).toEqual("wor");
    });

  });

  describe("Boolean", function(){

    it("Okay, there really isn't much else to do with booleans", function(){

      expect(true).toEqual(true);
      expect(false).toEqual(false);

    });

  });

  describe("Operators", function(){

    it("Strict Equality", function(){

      expect(5 === 5).toEqual(true);
      expect(5 === 3).toEqual(false);
      expect(5 === "5").toEqual(false);

    });

    it("Loose Equality", function(){

      expect(5 == 5).toEqual(true);
      expect(5 == 3).toEqual(false);
      expect(5 == "5").toEqual(true);

    });

    it("Comparison", function(){

      expect(5 > 5).toEqual(false);
      expect(5 >= 5).toEqual(true);
      expect(5 > 3).toEqual(true);
      expect(5 < 3).toEqual(false);

    });

    it("Non-Equality", function(){

      expect(!(5 > 3)).toEqual(false);
      expect(!!(5 > 3)).toEqual(true);
      expect(5 !== "5").toEqual(true);
      expect(5 != "5").toEqual(false);

    });

  });

  describe("Control Flow", function(){

    it("If", function(){

      var result = "nope";
      var sampleString = "hello";

      if (sampleString.length > 3) {
        result = "yep";
      }

      expect(result).toEqual("yep");

      result = 1;

      if (sampleString.substr(1, 1) === "e") {
        result = 2;

        if (sampleString.length === 6) {
          result = 3;
        }
      }

      expect(result).toEqual(2);

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

      expect(result).toEqual(2);

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

      expect(result).toEqual(10);

    });

    it("For Loops", function(){

      var count = 0;

      for (var i = 0; i < 5; i++) {
        count = count + 2;

        expect(i).toBeLessThan(5);
      }

      expect(i).toEqual(5);
      expect(count).toEqual(10);

    });

    it("While Loops", function(){

      var count = 0;
      var left = 10;

      while (left >= 1) {
        count = count + 2;
        left = left - 1;

        expect(left).toBeCloseTo(left);
      }

      expect(left).toEqual(0);
      expect(count).toEqual(20);

    });

  });

  describe("External Variables", function(){

    it("Values in index.js", function(){

      expect(a).toEqual(42);
      expect(b).toEqual("hello, world");
      expect(c).toEqual(true);
      
      expect(a).toBeDefined;
      expect(b).toBeDefined;
      expect(c).toBeDefined;
      expect(d).not.toBeDefined;

    });

  });

});