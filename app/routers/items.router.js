//jshint esversion:6

const attachTo = (app, data) => {
    app.route('/items')
        .get((req, res) => {
            return data.items.getAll()
                .then((items) => {
                    return res.render('items/all', { context: items });
                });
        })
        .post((req, res) => {
            const item = req.body;

            // validate item
            return data.items.create(item)
                .then((dbItem) => {
                    return res.redirect('/items/' + dbItem._id);
                })
                .catch((err) => {
                    // connect-flash
                    req.flash('error', err);
                    return res.redirect('/items/form');
                });
        });
    app.get('/items/form', (req, res) => {

        return res.render('items/form');
    });


};

module.exports = { attachTo };