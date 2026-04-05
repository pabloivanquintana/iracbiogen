import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html",
        },
        {
          source: "/programas",
          destination: "/programas.html",
        },
        {
          source: "/programa-detalle",
          destination: "/programa-detalle.html",
        },
        {
          source: "/experiencia-internacional",
          destination: "/experiencia-internacional.html",
        },
        {
          source: "/comunidad-academica",
          destination: "/comunidad-academica.html",
        },
        {
          source: "/posta-del-tigre",
          destination: "/posta-del-tigre.html",
        },
        {
          source: "/simposio",
          destination: "/simposio.html",
        },
      ],
    };
  },
};

export default nextConfig;
