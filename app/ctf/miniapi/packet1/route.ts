import { NextResponse } from "next/server";

export const dynamic = "force-static";

// export async function GET() {
//     return NextResponse.json({
//         fragment: "8720414d7ad2bdb65cd9",
//         param: "signal",
//         meta: {
//             processedAt: 1700000300,
//             serverId: "node-7f3a",
//             region: "us-east-2",
//             latency: 42
//         }
//     });
// }

export async function GET() {
    return NextResponse.json({
        error: "This endpoint is no longer active."
    });
}
