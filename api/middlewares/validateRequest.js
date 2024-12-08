const validateRequest = (req, res, next) => {
    const { name, phone, email, service } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({ message: "Поле 'name' не должно быть пустым" });
    }
    if (!phone || !phone.trim()) {
        return res.status(400).json({ message: "Поле 'phone' не должно быть пустым" });
    }
    if (!email || !email.trim()) {
        return res.status(400).json({ message: "Поле 'email' не должно быть пустым" });
    }
    if (!service || !service.trim()) {
        return res.status(400).json({ message: "Поле 'service' не должно быть пустым" });
    }

    next();
}

module.exports = validateRequest;