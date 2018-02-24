import { UINT64 as UInt64 } from 'cuint';
export declare enum Universe {
    INVALID = 0,
    PUBLIC = 1,
    BETA = 2,
    INTERNAL = 3,
    DEV = 4,
}
export declare const enum Type {
    INVALID = 0,
    INDIVIDUAL = 1,
    MULTISEAT = 2,
    GAMESERVER = 3,
    ANON_GAMESERVER = 4,
    PENDING = 5,
    CONTENT_SERVER = 6,
    CLAN = 7,
    CHAT = 8,
    P2P_SUPER_SEEDER = 9,
    ANON_USER = 10,
}
export declare enum Instance {
    ALL = 0,
    DESKTOP = 1,
    CONSOLE = 2,
    WEB = 3,
}
export declare const TypeChars: {
    [index: number]: string;
};
export declare const AccountIDMask = 4294967295;
export declare const AccountInstanceMask = 1048575;
export declare const ChatInstanceFlags: {
    Clan: number;
    Lobby: number;
    MMSLobby: number;
};
export declare class SteamID {
    private universe;
    private type;
    private instance;
    private accountID;
    constructor(input?: UInt64);
    fromIndividualAccountID(accountID: number): SteamID;
    readonly isValid: boolean;
    readonly isGroupChat: boolean;
    readonly isLobby: boolean;
    steam2(newerFormat?: boolean): string;
    steam3(): string;
    readonly steam64: string;
    toString(): string;
}
