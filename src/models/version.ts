import { Dependency } from './dependency';

export class Version {
    name: string;
    number: string;
    changelog: string;
    dependencies: Dependency[];
    gameVersions: string[];
    type: Version.Type;
    loaders: Version.Loader[];
    files: string[];

    constructor(version: { name: string, number: string, changelog: string, dependencies: Dependency[], gameVersions: string[], type: string, loaders: Version.Loader[], files: string[] }) {
        this.name = version.name ?? version.number;
        this.number = version.number;
        this.changelog = version.changelog;
        this.dependencies = version.dependencies;
        this.gameVersions = version.gameVersions;
        this.type = Version.Type[version.type];
        this.loaders = version.loaders;
        this.files = version.files;
    }
}

export namespace Version {
    export enum Type {
        Release = 'release',
        Beta = 'beta',
        Alpha = 'alpha'
    }

    export enum Loader {
        Bukkit = 'bukkit',
        BungeeCord = 'bungeecord',
        DataPack = 'datapack',
        Fabric = 'fabric',
        Folia = 'folia',
        Forge = 'forge',
        LiteLoader = 'liteloader',
        ModLoader = 'modloader',
        Paper = 'paper',
        Purpur = 'purpur',
        Quilt = 'quilt',
        Rift = 'rift',
        Spigot = 'spigot',
        Sponge = 'sponge',
        Velocity = 'velocity',
        Waterfall = 'waterfall'
    }
}