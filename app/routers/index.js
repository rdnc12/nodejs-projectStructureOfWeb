//jshint esversion:6

app.get('/', (req, res) => {
    return res.render('home');
});

app.get('/items', (req, res) => {
    return data.items.getAll()
        .then((items) => {
            return res.render('items/all', {
                context: items
            });
        });
});

app.get('/items/form', (req, res) => {

    return res.render('items/form');
});

app.post('/items', (req, res) => {
    const item = req.body;

    // validate item
    return data.items.create(item)
        .then((dbItem) => {
            return res.redirect('/items/' + dbItem.id);
        });
});