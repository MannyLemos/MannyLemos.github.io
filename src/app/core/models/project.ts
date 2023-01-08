export interface Project {
    name: string;
    tool_name: Array<string>;
    tool_src: Array<string>;
    description: string;                            // 
    link1: string;
    link1_name: string;
    link2: string;
    link2_name: string;
    featured?: boolean;                             // indicates whether the project should be displayed on the home page
}
