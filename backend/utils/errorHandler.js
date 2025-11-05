export function asyncHandler(fn) {
return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}


export function errorMiddleware(err, req, res, _next) {
console.error(err);
res.status(500).json({ error: "Something went wrong", detail: err.message });
}