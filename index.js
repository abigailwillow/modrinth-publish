import Publish from './src/publish.js';
import Actions from '@actions/core';

Publish({
    version_name: Actions.getInput('version_name'),
    version_number: Actions.getInput('version_number'),
    changelog: Actions.getInput('changelog'),
    dependencies: Actions.getInput('dependencies'),
    game_versions: Actions.getInput('game_versions'),
    version_type: Actions.getInput('version_type'),
    loaders: Actions.getInput('loaders'),
    featured: Actions.getInput('featured'),
    status: Actions.getInput('status'),
    project_id: Actions.getInput('project_id'),
    file_path: Actions.getInput('file'),
});