import { NextRequest } from "next/server";

// Универсальная функция проксирования
async function proxyRequest(req: NextRequest, path: string[]) {
  const apiUrl = `http://185.100.67.246:9000/${path.join("/")}`;

  const headers = new Headers(req.headers);
  headers.set("Content-Type", "application/json");
  headers.set("X-Forwarded-Host", req.headers.get("host") || "");

  const method = req.method;
  const body = method !== "GET" && method !== "HEAD" ? await req.text() : undefined;

  try {
    const response = await fetch(apiUrl, {
      method,
      headers,
      body,
    });

    const responseBody = await response.text();

    return new Response(responseBody, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Error proxying request" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// 👇 Здесь ключевой момент: context.params — это Promise
export async function GET(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return proxyRequest(req, path);
}

export async function POST(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return proxyRequest(req, path);
}

export async function PUT(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return proxyRequest(req, path);
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  return proxyRequest(req, path);
}
