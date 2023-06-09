'use strict';

import Actions from '@actions/core';
import Modrinth from './src/modrinth.js';

const versionName = Actions.getInput('version_name');
const version = Actions.getInput('version_number');
const changelog = Actions.getInput('changelog');
const dependencies = Actions.getInput('dependencies');
const gameVersions = Actions.getInput('game_versions');
const versionType = Actions.getInput('version_type');
const loaders = Actions.getInput('loaders');
const featured = Actions.getInput('featured');
const status = Actions.getInput('status');
const projectId = Actions.getInput('project_id');
const filePath = Actions.getInput('file');

if (!process.env.MODRINTH_TOKEN) Actions.setFailed('MODRINTH_TOKEN environment variable not set');

try {
    Modrinth.SetToken(process.env.MODRINTH_TOKEN);
    Modrinth.CreateVersion({
        name: versionName || version,
        version_number: version,
        changelog: changelog,
        dependencies: [], // TODO: Add support for dependencies
        game_versions: gameVersions.split(',').map(version => version.trim()),
        version_type: versionType,
        loaders: loaders.split(',').map(version => version.trim()),
        featured: featured === 'true',
        status: status,
        project_id: projectId,
        file_parts: ['file'],
    }, filePath);
} catch (error) {
    Actions.setFailed(error.message);
}