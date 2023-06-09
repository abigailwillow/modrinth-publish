'use strict';

import Fetch from 'node-fetch';
import File from 'fs';
import Path from 'path';
import FormData from 'form-data';
import * as Package from '../package.json' assert { type: 'json' };

const baseUrl = 'https://api.modrinth.com/v2';
const headers = {};
headers['User-Agent'] = `abbydiode/modrinth-publish/${Package.version}`;

export default class Modrinth {
    static SetToken = token => headers['Authorization'] = token;

    static CreateVersion = async (metadata, filePath) => {
        console.log(JSON.stringify(metadata));

        const form = new FormData();
        form.append('data', JSON.stringify(metadata));
        form.append('file', File.createReadStream(filePath), Path.parse(filePath).base);
        const response = await Fetch(`${baseUrl}/version`, {
            method: 'POST',
            headers: headers,
            body: form
        });
    };
};