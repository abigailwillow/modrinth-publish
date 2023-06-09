import Modrinth from './modrinth.js';
import Actions from '@actions/core';

const Publish = async version => {
    if (!process.env.MODRINTH_TOKEN) { Actions.setFailed('MODRINTH_TOKEN environment variable not set'); return false; }

    try {
        Modrinth.SetToken(process.env.MODRINTH_TOKEN);
        return await Modrinth.CreateVersion({
            name: version.version_name || version.version_number,
            version_number: version.version_number,
            changelog: version.changelog,
            dependencies: [], // TODO: Add support for dependencies
            game_versions: version.game_versions.split(',').map(v => v.trim()),
            version_type: version.version_type,
            loaders: version.loaders.split(',').map(v => v.trim()),
            featured: version.featured === 'true',
            status: version.status,
            project_id: version.project_id,
            file_parts: ['file'],
        }, version.file_path);
    } catch (error) {
        Actions.setFailed(error.message);
        return false;
    }
};

export default Publish;