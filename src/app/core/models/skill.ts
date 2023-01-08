export interface Skill {
    name: string;
    stack: { 
        icon: string, 
        name: string 
    };   // used to show the language / framework of the project.
    description: string;                            // 
    sourceUrl: string;
    previewUrl: string;
    featured?: boolean;                             // indicates whether the project should be displayed on the home page
}
