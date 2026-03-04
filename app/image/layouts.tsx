/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import { ReactNode } from "react";

const Base = ({ children }: { children: ReactNode }) => (
  <html>
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body
      style={{
        margin: 0,
        padding: 0,
        width: "1200px",
        height: "720px",
        overflow: "hidden",
      }}
    >
      {children}
    </body>
  </html>
);

export const Type01 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "60px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            right: "-100px",
            top: "-100px",
            width: "600px",
            height: "600px",
            opacity: 0.2,
            borderRadius: "50%",
          }}
        />
      )}
      <div
        style={{
          fontSize: "24px",
          color: "#4ecca3",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        CASE STUDY
      </div>
      <div
        style={{
          fontSize: "84px",
          fontWeight: "900",
          lineHeight: 1.1,
          marginBottom: "auto",
          maxWidth: "800px",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ width: "60px", height: "4px", background: "#4ecca3" }} />
        <div style={{ fontSize: "32px", fontWeight: "500" }}>{name}</div>
      </div>
    </div>
  </Base>
);

export const Type02 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f4f2",
        color: "#333",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={image || "https://via.placeholder.com/400x720"}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.2em",
            color: "#888",
            marginBottom: "20px",
          }}
        >
          INSIGHTS
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: "40px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: "28px",
            fontStyle: "italic",
            color: "#555",
          }}
        >
          — {name}
        </div>
      </div>
    </div>
  </Base>
);

export const Type03 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#050505",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #ff00ff, #00ffff)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(to right, #00ffff, #ff00ff)",
        }}
      />

      <div
        style={{
          fontSize: "120px",
          fontWeight: "900",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "-0.05em",
          color: "transparent",
          WebkitTextStroke: "2px #fff",
          marginBottom: "-40px",
          opacity: 0.3,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "96px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 0 20px #ff00ff, 0 0 40px #00ffff",
          zIndex: 1,
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: "60px",
          padding: "10px 30px",
          border: "2px solid #00ffff",
          borderRadius: "100px",
          color: "#00ffff",
          fontSize: "24px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Verified by {name}
      </div>
    </div>
  </Base>
);

export const Type04 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "40px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.2)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <img
            src={image}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
            }}
          />
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "white",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {name}
          </div>
        </div>

        <div
          style={{
            fontSize: "80px",
            fontWeight: "900",
            color: "white",
            lineHeight: 1.1,
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>

        <div style={{ marginTop: "auto", display: "flex", gap: "12px" }}>
          {["Next.js", "Design", "Satoru"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                padding: "8px 20px",
                borderRadius: "100px",
                color: "white",
                fontSize: "32px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Base>
);

export const Type05 = ({
  title,
  name,
  image,
}: {
  title: string;
  name: string;
  image: string;
}) => (
  <Base>
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFDE00",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          border: "8px solid #000",
          background: "#fff",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxShadow: "20px 20px 0px #000",
        }}
      >
        <div
          style={{
            height: "80px",
            borderBottom: "8px solid #000",
            background: "#000",
            display: "flex",
            alignItems: "center",
            padding: "0 30px",
            gap: "10px",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "4px solid #fff",
              }}
            />
          ))}
          <div
            style={{
              marginLeft: "auto",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            README.md
          </div>
        </div>
        <div
          style={{
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              background: "#000",
              color: "#fff",
              display: "inline-block",
              padding: "10px 20px",
              fontSize: "24px",
              fontWeight: "bold",
              width: "fit-content",
              marginBottom: "30px",
              transform: "rotate(-2deg)",
            }}
          >
            # {name}
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: "900",
              color: "#000",
              lineHeight: 1,
              marginBottom: "40px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              View Project
            </div>
            <img
              src={image}
              alt=""
              style={{
                width: "200px",
                height: "200px",
                border: "8px solid #000",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </Base>
);
