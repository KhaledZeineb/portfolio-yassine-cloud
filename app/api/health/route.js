export const dynamic = 'force-dynamic';

// Endpoint de santé utilisé par Docker, le pipeline et la validation finale
export function GET() {
  return Response.json({
    status: 'ok',
    version: process.env.APP_VERSION || 'dev',
    time: new Date().toISOString(),
  });
}
