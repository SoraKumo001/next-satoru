import { render } from "satoru-render";
import { toHtml } from "satoru-render/react";
import { Type01, Type02, Type03, Type04, Type05 } from "./layouts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const image = searchParams.get("image") ?? "";
  const title = searchParams.get("title") ?? "Untitled Layout";
  const name = searchParams.get("name") ?? "Unknown Author";
  const type = searchParams.get("type") ?? "1";

  let layoutElement;
  switch (type) {
    case "2":
      layoutElement = <Type02 title={title} name={name} image={image} />;
      break;
    case "3":
      layoutElement = <Type03 title={title} name={name} image={image} />;
      break;
    case "4":
      layoutElement = <Type04 title={title} name={name} image={image} />;
      break;
    case "5":
      layoutElement = <Type05 title={title} name={name} image={image} />;
      break;
    default:
      layoutElement = <Type01 title={title} name={name} image={image} />;
  }

  const html = toHtml(layoutElement);

  try {
    const png = await render({
      value: html,
      width: 1200,
      height: 720,
      format: "png",
    });

    return new Response(png as BodyInit, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store, must-revalidate",
        date: new Date().toUTCString(),
      },
    });
  } catch (error) {
    console.error("Render error:", error);
    return new Response("Render failed", { status: 500 });
  }
}
