import { handleError, archiveError } from "../helpers";
import {
    AcceptAdmissionRSVPRequest,
    AttendeeProfile,
    UserInfo,
    UserQr
} from "../types";

export async function isAuthenticated() {
    return false;
}

export async function getAuthToken() {
    handleError(archiveError);
    return null;
}

export async function authenticate() {
    handleError(archiveError);
}

export async function postAuthRefresh() {
    // just throw error response on all of these, like 503 or whatnot -- they should never be called
    // -- we can ignore the pages and just do this to all the endpoints, everything should I think then work
    // (look for any straggler items/pages that they can obviously access but will fail and hide/remove access
    // to them)
    // tbh only a few endpoints (events, mentors, judges) will need to (or can) actually return non-user-related data
    handleError(archiveError);
}

export async function webSignOutUser() {
    handleError(archiveError);
}

export async function getUserInfo() {
    handleError(archiveError);
    return {} as UserInfo;
}

export async function loadQRCode() {
    handleError(archiveError);
    return {} as UserQr;
}

export async function loadProfile() {
    handleError(archiveError);
    return {} as AttendeeProfile;
}

export async function updateProfile(
    _body: Partial<AcceptAdmissionRSVPRequest>
) {
    handleError(archiveError);
    return {} as AttendeeProfile;
}

export async function subscribe(_listName: string, _emailAddress: string) {
    handleError(archiveError);
    return "";
}
