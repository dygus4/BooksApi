const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return corrected form of firstName and lastName ', () => {
        expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
        expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
        expect(formatFullname('lOrEm IpSuM')).to.equal('Lorem Ipsum');
    });
 
    it('should return an error if "fullName" arg is empty ', () => {
        expect(formatFullname('')).to.equal('Error');
      });
    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });  
    it('should return an error if "fullName" arg is not two string separated by a space', () => {
        expect(formatFullname('lorem')).to.equal('Error');
        expect(formatFullname('lorem lorem lorem')).to.equal('Error');
        expect(formatFullname('lorem-lorem-lorem')).to.equal('Error');
    });  
    


      
      
   
  });
  