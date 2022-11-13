const path = require('path');
const apiRoutes = require('./apiRoutes');
const router = require('express').Router();

router.use('/api', apiRoutes);

// creating routes
// GET * should return the index.html file.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
// GET /notes should return the notes.html file.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



module.exports = router;