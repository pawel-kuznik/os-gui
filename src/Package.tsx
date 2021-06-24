/**
 *  This is an interface describig how an application package should look like.
 */
export default interface Package {

    /**
     *  The name of the application. This is the name that the system would use internally
     *  for various reasons.
     */
    get name() : string;

    /**
     *  The version of the application.
     */
    get version() : string;

    /**
     *  The title of the application. This string should be used in communication with
     *  the user.
     */
    get title(): string;
};