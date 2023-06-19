
export class Dependency {
    projectId: string;
    versionId: string;
    type: Dependency.Type;

    constructor(dependency: { projectId: string, versionId: string, type: Dependency.Type }) {
        if (!dependency.projectId && !dependency.versionId) throw new Error('Dependency must have a project_id or version_id');
        this.projectId = dependency.projectId;
        this.versionId = dependency.versionId;
        this.type = dependency.type;
    }
}

export namespace Dependency {
    export enum Type {
        Required = 'required',
        Optional = 'optional',
        Incompatible = 'incompatible',
        Embedded = 'embedded'
    }
}