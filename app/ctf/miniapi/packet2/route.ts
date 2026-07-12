import { NextResponse } from "next/server";

export const dynamic = "force-static";

// export async function GET() {
//     return NextResponse.json({
//         fragment: "5b0125706439da",
//         param: "signal",
//         meta: {
//             processedAt: 1700000100,
//             serverId: "node-2b9c",
//             region: "us-west-1",
//             latency: 38
//         }
//     });
// }

export async function GET() {
    return NextResponse.json({
        error: "This endpoint is no longer active."
    });
}
