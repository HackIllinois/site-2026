import { archiveError, handleError } from "../helpers";
import {
    AcceptAdmissionRSVPRequest,
    ChallengeResponse,
    ChallengeStatus,
    RegistrationApplicationDraftBody,
    RegistrationApplicationSubmitted,
    RSVPInfo
} from "../types";

export async function registrationAlive() {
    return false;
}

export async function getChallenge(_shouldThrow?: boolean) {
    handleError(archiveError);
    return {} as ChallengeStatus;
}

export async function submitChallenge(_file: File) {
    handleError(archiveError);
    return {} as ChallengeResponse;
}

export async function saveDraft(_data: RegistrationApplicationDraftBody) {
    handleError(archiveError);
    return {};
}

export async function loadDraft() {
    handleError(archiveError);
    return {} as RegistrationApplicationDraftBody;
}

export async function submitDraft(_data: RegistrationApplicationDraftBody) {
    handleError(archiveError);
    return {};
}

export async function loadSubmission() {
    handleError(archiveError);
    return {} as RegistrationApplicationSubmitted;
}

export async function loadAdmissionRSVP() {
    handleError(archiveError);
    return {} as RSVPInfo;
}

export async function declineAdmissionRSVP() {
    handleError(archiveError);
}

export async function acceptAdmissionRSVP(_body: AcceptAdmissionRSVPRequest) {
    handleError(archiveError);
    return {} as RSVPInfo;
}

export async function uploadFile(_file: File) {
    handleError(archiveError);
    return {};
}
