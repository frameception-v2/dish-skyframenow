import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative" style={{ background: 'linear-gradient(to bottom, #87CEEB, #FFFFFF)' }}>
        <h1 tw="text-6xl font-bold text-blue-900">{PROJECT_TITLE}</h1>
        <h3 tw="text-2xl text-center text-blue-800 px-8">{PROJECT_DESCRIPTION}</h3>
        <div tw="absolute bottom-8 text-blue-700 text-lg">Always know your sky</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
