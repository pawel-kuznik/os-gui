import Package from "../Package";
/**
 *  This is an implementation for standard console application.
 */
export default class Console implements Package {

    /**
     *  System name for the package.
     *  @see Package::name
     */
    get name(): string { return 'console'; }

    /**
     *  The version of the package.
     *  @see Package::version
     */
    get version(): string { return '1.0'; }

    /**
     *  The title of the package.
     *  @see Package::title
     * 
     *  @todo make it translatable
     */
    get title(): string { return 'Console'; }
};