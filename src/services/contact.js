/**
 * contact.js — Capa de servicio para el formulario de demo.
 * Stub actual. Reemplazar el comentario con llamada real cuando esté disponible la API.
 *
 * @param {string} email
 * @returns {Promise<{ success: boolean, message?: string }>}
 */
export async function requestDemo(email) {
  // TODO: conectar a API real
  // const res = await fetch(`${import.meta.env.VITE_API_URL}/demo-request`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email }),
  // })
  // return res.json()

  console.warn('[contact.js] stub activo — email recibido:', email)
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 800))
}
