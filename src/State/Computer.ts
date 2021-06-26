import Console from "../Apps/Console";
import InstalledPackage from "./InstalledPackage";

/**
 *  Gateway is a machine that the user uses to communicate with other machines
 *  (like servers, etc). This machine has resource limits, running screens,
 *  applications, installed applications, etc. It emulates an actual computer
 *  in the environment of the game.
 * 
 *  @todo implement install and uninstall
 *  @todo implement events telling that a package was installed or uninstalled.
 *  @todo implement the resource limits
 *  @todo implement persistent memory
 *  @todo implement system memory
 */
export default class Computer {

    /**
     *  The installed packages.
     */
    private _installed:Array<InstalledPackage> = [];

    /**
     *  The constructor.
     */
    public constructor() {

        // each computer comes with console
        this._installed.push(new InstalledPackage(new Console()));
    }

    /**
     *  Information about the resource limits this computer has to offer.
     *  @todo implement
     */
    public get resources() : any { return { }; }

    /**
     *  The currently running screens on this computer. 
     *  @todo implement
     */
    public get screens() : Array<any> { return []; }

    /**
     *  The currently installed packages.
     */
    public get installed() : Array<InstalledPackage> { return [...this._installed]; }
};