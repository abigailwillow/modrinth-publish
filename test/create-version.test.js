
import Publish from '../src/publish.js';
import Assert from 'assert'; 

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');
const second = String(now.getSeconds()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}, ${hour}:${minute}:${second}`;

Assert.strictEqual(await Publish({
    version_name: `Debug Version ${formattedDate}`,
    version_number: '1.0.0',
    changelog: 'Debug Changelog',
    dependencies: '',
    game_versions: '1.19, 1.19.1, 1.19.2, 1.19.3, 1.19.4',
    version_type: 'release',
    loaders: 'fabric',
    featured: 'false',
    status: 'listed',
    project_id: process.env.DEBUG_PROJECT_ID,
    file_path: './test/debug.zip',
}), true);