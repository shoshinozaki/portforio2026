// 🔑 設定エリア（ここを変更）
const USER = "portforio";
const PASS = "0123";

export async function onRequest({ request, next, env }) {
  const expectedUser = env.BASIC_USER || USER;
  const expectedPass = env.BASIC_PASS || PASS;

  const auth = request.headers.get("Authorization");

  if (auth?.startsWith("Basic ")) {
    try {
      // Base64デコード（日本語対応）
      const decoded = new TextDecoder().decode(
        Uint8Array.from(atob(auth.slice(6)), (c) => c.charCodeAt(0))
      );
      const [u, p] = decoded.split(":");

      // タイミング攻撃対策を含む安全な比較
      const enc = new TextEncoder();
      const aU = enc.encode(u), bU = enc.encode(expectedUser);
      const aP = enc.encode(p), bP = enc.encode(expectedPass);

      const isUserValid = aU.byteLength === bU.byteLength && crypto.subtle.timingSafeEqual(aU, bU);
      const isPassValid = aP.byteLength === bP.byteLength && crypto.subtle.timingSafeEqual(aP, bP);

      if (isUserValid && isPassValid) return await next();
    } catch {
      // 解析エラー時は通過させずに401を返す
    }
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Portfolio Access"' },
  });
}