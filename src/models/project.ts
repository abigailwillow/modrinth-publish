import { Version } from './version';


export class Project {
    id: string;
    description: string;
    body: string;
    sourceUrl: string;
    issuesUrl: string;
    wikiUrl: string;
    versions: Version[];

    constructor(project: { id: string, description: string, body: string, sourceUrl: string, issuesUrl: string, wikiUrl: string }) {
        this.id = project.id;
        this.description = project.description;
        this.body = project.body;
        this.sourceUrl = project.sourceUrl;
        this.issuesUrl = project.issuesUrl;
        this.wikiUrl = project.wikiUrl;
    }
}
