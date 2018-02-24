const { expect } = require('chai');
const { describe, it } = require('mocha');
const { ChatInstanceFlags, Instance, SteamID, Type, Universe } = require('../index');

describe('steamid64', () => {
    it('constructs individual id', () => {
        return expect(new SteamID('76561198006409530')).to.include({
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
    });

    it('constructs clan id', () => {
        return expect(new SteamID('103582791434202956')).to.include({
            universe: Universe.PUBLIC,
            type: Type.CLAN,
            instance: Instance.ALL,
            accountID: 4681548
        });
    });

    it('correctly renders individual id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
      
        return expect(sid.steam64()).to.be.equal('76561198006409530');
    });

    it('correctly renders anonymous gameserver id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.ANON_GAMESERVER,
            instance: 188991,
            accountID: 42135013
        });
      
        return expect(sid.steam64()).to.be.equal('90883702753783269');
    });
});
