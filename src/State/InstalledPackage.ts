import Package from "../Package";
/**
 *  This class represents an installed package on a computer. It should always tell
 *  which memory blocks it occupies, what is the package it needs.
 *  
 *  @todo this should implement some kind of common interface for files (it's installed
 *  on file system).
 * 
 *  @todo it should have a unique identifier.
 */
export default class InstalledPackage {

    private _package:Package;

    /**
     *  The constructor.
     */
    public constructor(thing:Package) {

        this._package = thing;
    }

    /**
     *  Get the package that this package was installed from.
     */
    public get package() : Package { return this._package; }
};