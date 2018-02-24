const { expect } = require('chai');
const { describe, it } = require('mocha');
const { Instance, SteamID, Type, Universe } = require('../index');

describe('steamid2', () => {
    it('constructs', () => {
        return expect(new SteamID('STEAM_0:0:23071901')).to.include({
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
    });

    it('constructs with newer format', () => {
        return expect(new SteamID('STEAM_1:1:23071901')).to.include({
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143803
        });
    });

    it('correctly renders id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
      
        return expect(sid.steam2()).to.be.equal('STEAM_0:0:23071901');
    });

    it('correctly renders with newer format', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
      
        return expect(sid.steam2(true)).to.be.equal('STEAM_1:0:23071901');
    });

    it('correctly renders non-individual id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.CLAN,
            instance: Instance.DESKTOP,
            accountID: 4681548
        });
        
        return expect(sid.steam2.bind(sid)).to.throw();
    });
});


