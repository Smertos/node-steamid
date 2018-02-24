const { expect } = require('chai');
const { describe, it } = require('mocha');
const { ChatInstanceFlags, Instance, SteamID, Type, Universe } = require('../index');

describe('steamid3', () => {
    it('constructs individual id', () => {
        return expect(new SteamID('[U:1:46143802]')).to.include({
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
    });

    it('constructs anonymous gameserver id', () => {
        return expect(new SteamID('[A:1:46124:11245]')).to.include({
            universe: Universe.PUBLIC,
            type: Type.ANON_GAMESERVER,
            instance: 11245,
            accountID: 46124
        });
    });

    it('constructs lobby id', () => {
        return expect(new SteamID('[L:1:12345]')).to.include({
            universe: Universe.PUBLIC,
            type: Type.CHAT,
            instance: ChatInstanceFlags.Lobby,
            accountID: 12345
        });
    });

    it('constructs lobby id with instanceID', () => {
        return expect(new SteamID('[L:1:12345:55]')).to.include({
            universe: Universe.PUBLIC,
            type: Type.CHAT,
            instance: ChatInstanceFlags.Lobby | 55,
            accountID: 12345
        });
    });

    it('correctly renders individual id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.INDIVIDUAL,
            instance: Instance.DESKTOP,
            accountID: 46143802
        });
      
        return expect(sid.steam3()).to.be.equal('[U:1:46143802]');
    });

    it('correctly renders anonymous gameserver id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.ANON_GAMESERVER,
            instance: 41511,
            accountID: 43253156
        });
      
        return expect(sid.steam3()).to.be.equal('[A:1:43253156:41511]');
    });

    it('correctly renders lobby id', () => {
        const sid = Object.assign(new SteamID(), {
            universe: Universe.PUBLIC,
            type: Type.CHAT,
            instance: ChatInstanceFlags.Lobby,
            accountID: 451932
        });
      
        return expect(sid.steam3()).to.be.equal('[L:1:451932]');
    });
});

