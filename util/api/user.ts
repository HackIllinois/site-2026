import { handleError, archiveError } from "../helpers";
import { AcceptAdmissionRSVPRequest } from "../types";

export const isAuthenticated = () => false;

export const getAuthToken = () => {
    handleError(archiveError);
};

export const authenticate = () => {
    handleError(archiveError);
};

export const postAuthRefresh = () => {
    // just throw error response on all of these, like 503 or whatnot -- they should never be called
    // -- we can ignore the pages and just do this to all the endpoints, everything should I think then work
    // (look for any straggler items/pages that they can obviously access but will fail and hide/remove access
    // to them)
    // tbh only a few endpoints (events, mentors, judges) will need to (or can) actually return non-user-related data
    handleError(archiveError);
};

export const webSignOutUser = () => {
    handleError(archiveError);
};

export const getUserInfo = () => {
    handleError(archiveError);
};

export const loadQRCode = () => {
    handleError(archiveError);
};

export const loadProfile = () => {
    handleError(archiveError);
};

export const updateProfile = (_body: Partial<AcceptAdmissionRSVPRequest>) => {
    handleError(archiveError);
};

export const subscribe = (_listName: string, _emailAddress: string) => {
    handleError(archiveError);
};
