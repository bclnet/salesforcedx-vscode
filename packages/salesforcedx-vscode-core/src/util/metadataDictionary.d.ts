import { SourcePathStrategy } from '../commands/util/sourcePathStrategies';
export declare class MetadataDictionary {
    static getInfo(metadataType: string): MetadataInfo | undefined;
}
export type MetadataInfo = {
    type: string;
    suffix: string;
    directory: string;
    pathStrategy: SourcePathStrategy;
    extensions?: string[];
};
