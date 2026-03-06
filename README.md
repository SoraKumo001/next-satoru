# next-satoru

Sample for Creating OGP Images with Next.js

https://next-satoru.vercel.app/

## Usage

You can generate OGP images by sending a GET request to the `/image` endpoint with query parameters.

### Endpoint

`/image`

### Parameters

| Name    | Description                     | Default           |
| :------ | :------------------------------ | :---------------- |
| `type`  | Layout type (1-5)               | `1`               |
| `title` | Main title text                 | `Untitled Layout` |
| `name`  | Author or subtitle text         | `Unknown Author`  |
| `image` | Background or profile image URL | (none)            |

### Dependencies

Ensure you have the following dependencies installed for Tailwind (via UnoCSS) support:

```bash
pnpm add @unocss/preset-wind4 satoru-render
```

### Example

`https://next-satoru.vercel.app/image?type=1&title=Hello+World&name=John+Doe&image=https://example.com/avatar.png`

- Converted samples

![](./document/image01.png) ![](./document/image02.png)
![](./document/image03.png) ![](./document/image04.png)
![](./document/image05.png)
