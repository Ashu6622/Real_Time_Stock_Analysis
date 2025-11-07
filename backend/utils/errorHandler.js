export function errorMiddleware(err, req, res, _next) {
res.status(500).json({ error: "Something went wrong", detail: err.message });
}