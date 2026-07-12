import { archiveError, handleError } from "../helpers";
import {
    AcceptAdmissionRSVPRequest,
    RegistrationApplicationDraftBody
} from "../types";

export const registrationAlive = () => false;

export const getChallenge = () => {
    handleError(archiveError);
};

export const submitChallenge = () => {
    handleError(archiveError);
};

export const saveDraft = (_data: RegistrationApplicationDraftBody) => {
    handleError(archiveError);
};

export const submitDraft = (_data: RegistrationApplicationDraftBody) => {
    handleError(archiveError);
};

export const loadSubmission = () => {
    handleError(archiveError);
};

export const loadAdmissionRSVP = () => {
    handleError(archiveError);
};

export const declineAdmissionRSVP = () => {
    handleError(archiveError);
};

export const acceptAdmissionRSVP = (_body: AcceptAdmissionRSVPRequest) => {
    handleError(archiveError);
};

export const uploadFile = (_file: File) => {
    handleError(archiveError);
};
