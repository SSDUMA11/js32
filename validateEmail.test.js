let assert = chai.assert;
describe("validateEmail", function() {
    describe('valid string', function(){
      it('not an empty string', function() {
        assert.equal(validateEmail(''), false);
      });

      it('typeof string', function() {
        assert.equal(validateEmail(222), false, 'number error');
        assert.equal(validateEmail(true), false, 'boolean error');
        assert.equal(validateEmail({}), false, 'object error');
      });

      it('not all spaces', function() {
        assert.equal(validateEmail('     '), false);
      });

      it('string length is less than 5', function() {
        assert.equal(validateEmail('e@g.'), false);
        assert.equal(validateEmail('e@g.c'), true);
      });
    })

    describe('valid data', function(){
      it('Don\'t have the @ or @ the first character', function(){
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
      });

      it('string contains only one "@"', function() {
        assert.equal(validateEmail('e.mail@@gmail.com'), false);
        assert.equal(validateEmail('e.mailgmail.com'), false);
        assert.equal(validateEmail('e.mail@gmail.com'), true);
      });

      it('string contains "." after "@"', function() {
        assert.equal(validateEmail('e.mail@gmailcom'), false);
        assert.equal(validateEmail('e.mail.@gmail.com'), false);
        assert.equal(validateEmail('e.mail@gmail.com'), true);
      });

    })
  })
  