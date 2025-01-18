import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiZGlzaC1za3lmcmFtZW5vdy52ZXJjZWwuYXBwIn0",
      signature: "MHg5ODJiOTIxMzc1MjNjMTMxMGU0NzQyY2YzMTJhOTQ3Y2E4ZTVjZjljNDEyYmI2Y2I3ZjVkMmJjNDcyZjQ2ODNhMDVhNGI3MmQ1N2FmNWFkYWQwNjlkZmMwYWY1YjE2MWI5MThkZWZmNTQ0M2RhYmYxYWU1ZTE2NDM0NjYwNmMzYzFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
