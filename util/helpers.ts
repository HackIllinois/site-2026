import { APIError } from "./error";

export function handleError(body: {
    message: string;
    status: number;
    type: string;
}) {
    if (body && body.message) {
        alert(body.message);
    } else {
        alert(body);
    }
    throw new APIError(body);
}

export const archiveError = {
    message:
        "The site tried to make a server request (likely authentication/user-related), but cannot because this is a static archive of a past website.",
    status: 500,
    type: "archived_error"
};
