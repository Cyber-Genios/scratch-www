import ScratchStorage from 'scratch-storage';

const PROJECT_HOST = process.env.PROJECT_HOST || 'https://projects.scratch.mit.edu';

/**
 * Wrapper for ScratchStorage which adds default web sources.
 * @todo make this more configurable
 */
class Storage extends ScratchStorage {
    constructor () {
        super();
        this.addWebSource(
            [this.AssetType.Project],
            this.getProjectGetConfig.bind(this)
        );
    }

    setProjectToken (projectToken) {
        this.projectToken = projectToken;
    }
    
    getProjectGetConfig (projectAsset) {
        const path = `${PROJECT_HOST}/projects/${projectAsset.assetId}/content`;
        // const qs = this.projectToken ? `?token=${this.projectToken}` : '';
        return path;
    }
}

const storage = new Storage();

export default storage;
