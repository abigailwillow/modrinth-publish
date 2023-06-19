import Publish from './publish';
import * as Actions from '@actions/core';
import { Version } from './models/version';
import { Project } from './models/project';
import Yaml from 'js-yaml';
import { Dependency } from './models/dependency';

let config = Yaml.load('../modrinth.yml');

let dependencies = new Dependency[config.dependencies.length];
config.dependencies.forEach((dependency, index) => {
    dependencies[index] = new Dependency({
        projectId: dependency.project_id,
        versionId: dependency.version_id,
        type: dependency.type
    });
});

let version = new Version({
    name: Actions.getInput('version_name'),
    number: config.version ?? Actions.getInput('version_number'),
    changelog: Actions.getInput('changelog'),
    dependencies: dependencies,
    gameVersions: config.game_versions,
    type: Actions.getInput('version_type'),
    loaders: config.loaders,
    files: Actions.getInput('files').split('\n')
});

let project = new Project({
    id: config.id,
    description: "", // TODO: Get description from GitHub
    body: "", // TODO: Get README.md
    sourceUrl: "", // TODO: Get repository URL from GitHub
    issuesUrl: "", // TODO: Get issues URL from GitHub
    wikiUrl: "" // TODO: Get wiki URL from GitHub,
});

Publish(version, project);