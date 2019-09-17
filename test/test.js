const coalesce=require('./../src/index.js');
const assert=require('assert');
describe("TestCoalesceSelect", function(){
    it("Selecting_EmptyInput_ReturnNull", function(){
        let result = coalesce();
        assert.equal(null, result, "");
    });
    it("Selecting_EmptyArray_ReturnArray", function(){
        let result = coalesce();
        assert.equal(null, result, "");
    });
    it("Selecting_Null_ReturnNull", function(){
        let result = coalesce(null);
        assert.equal(null, result, "");
    });

    it("Selecting_Undefined_ReturnNull", function(){
        let result = coalesce(undefined);
        assert.equal(null, result, "");
    });


    it("Selecting_EmptyArray_ReturnArray", function(){
        let result = coalesce([]);
        assert.equal(0, result.length, "");
    });

    it("Selecting_NotNullValueAtBegin_CorrectResult", function(){
        let result = coalesce(1, 2, null, 3);
        assert.equal(1, result, "");
    });

    it("Selecting_NotNullValueAtMiddle_CorrectResult", function(){
        let result = coalesce(null, null, 1, null, null);
        assert.equal(1, result, "");
    });
    it("Selecting_NotNullValueAtEnd_CorrectResult", function(){
        let result = coalesce(null, null, null, 4);
        assert.equal(4, result, "");
    });
    it("Selecting_AllNull_CorrectResult", function(){
        let result = coalesce(null, null, null, null);
        assert.equal(null, result, "");
    });
    it("Selecting_AllUndefined_CorrectResult", function(){
        let result = coalesce(undefined, undefined, undefined, undefined);
        assert.equal(null, result, "");
    });

});