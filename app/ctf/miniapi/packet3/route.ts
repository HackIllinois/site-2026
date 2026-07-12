import { NextResponse } from "next/server";

export const dynamic = "force-static";

// export async function GET() {
//     return NextResponse.json({
//         fragment: "ee3111b1dd03a7",
//         param: "signal",
//         meta: {
//             processedAt: 1700000400,
//             serverId: "node-1a4d",
//             region: "eu-central-1",
//             latency: 91
//         }
//     });
// }

export async function GET() {
    return NextResponse.json({
        error: "This endpoint is no longer active."
    });
}
