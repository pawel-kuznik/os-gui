import Console from "../Apps/Console";
import Package from "../Package";
/**
 *  This is a class providing an access to all packages that the whole system has access to.
 *  This class should be used to register, list, and fetch new packages. Later on the system
 *  would use this class to provide execution for actual applications.
 */
export default class PackagesProvider {

    /**
     *  The singletone instance.
     */
    private static _instance:PackagesProvider;

    /**
     *  Get an initialized instance of PackagesProvider
     */
    static getInstance() : PackagesProvider {

        if (this._instance) return this._instance; 

        this._instance = new PackagesProvider();

        this._instance.register(new Console());

        return this._instance;
    }

    /**
     *  The registered applications inside the provider.
     */
    private readonly _packages:Map<string, Package> = new Map();

    /**
     *  The private constructor cause we want to force use of a singletone instance.
     */
    private constructor() {

        
    }

    /**
     *  The number of registered packages.
     *  @todo add observer
     */
    public get size() : number { return this._packages.size; }

    /**
     *  Register an application.
     */
    public register(template:Package) : boolean {

        // @todo check if the name is only alphanumerical + _

        const versioned:string = `${template.name}::${template.version}`;

        if (this._packages.has(versioned)) return false;

        this._packages.set(versioned, template);

        return true;
    }

    /**
     *  Get application template matching specific versioned name.
     */
    public fetch(name:string) : Package|null {

        return this._packages.get(name) || null;
    }

    /**
     *  List version of a specific application.
     */
    public listVersions(name:string) : Array<string> {

        return [...this._packages.keys()].filter(versioned => {
            return versioned.split('::')[0] == name;
        }).map(versioned => {
            return versioned.split('::')[1];
        }).sort((a:string, b:string) => {
            return a.localeCompare(b);
        });
    }

    /**
     *  List all applications by name.
     */
    public listApplications() : Array<string> {

        return [...this._packages.keys()].map(versioned => {
            return versioned.split('::')[0];
        }).reduce<Array<string>>((arr:Array<string>, value:string) => {
            if (!arr.includes(value)) arr.push(value)
            return arr;
        }, [ ]).sort((a:string, b:string) => {
            return a.localeCompare(b);
        });
    }
};