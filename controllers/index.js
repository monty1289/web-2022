exports.index = (req, res) => res.render('index',{title:"My Website"})
exports.mens = (req, res) => res.render('mens',{title:"Mens wear"})
exports.womens = (req, res) => res.render('womens',{title:"Womens wear"})
exports.boys = (req, res) => res.render('boys',{title:"boys wear"})
exports.girls = (req, res) => res.render('girls',{title:"girls wear"})
exports.electronics = (req, res) => res.render('electronics',{title:"electronics"})
exports.login = (req, res) => res.render('login',{title:"login"})

