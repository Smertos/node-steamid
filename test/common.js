const { expect } = require('chai');
const { describe, it } = require('mocha');
const { Instance, SteamID, Type, Universe } = require('../index');

describe('common stuff', () => {
    it('constructs without parameters', () => {
        return expect(new SteamID()).to.include({
            universe: Universe.INVALID,
            type: Type.INVALID,
            instance: Instance.ALL,
            accountID: 0
        });
    });

    it('constructs using fromIndividualAcccountID', () => {
        return expect(SteamID.fromIndividualAccountID(46143802)).to.include({
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
    });

    it('throws error if incorrect input has been given to the constructor', ()=> {
        return expect(() => new SteamID("invalid input")).to.throw();
    });

    it('invalidates empty id', () => {
        return expect(new SteamID().isValid).to.be.false;
    });

    it('invalidates individual id', () => {
        return expect(new SteamID('[U:1:46143802:10]').isValid).to.be.false;
    });

    it('invalidates non-all clan id', () => {
        return expect(new SteamID('[g:1:4681548:2]').isValid).to.be.false;
    });

    it('invalidates gameserver id with accountID 0', () => {
        return expect(new SteamID('[G:1:0]').isValid).to.be.false;
    });
});
