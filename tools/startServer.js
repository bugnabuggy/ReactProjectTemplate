import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import colors from 'colors';

const config = require('../webpack.dev');
const port = 3001;
const app = express();
const compiler = webpack(config);

app.use('/assets',express.static(path.join( __dirname, '../src/assets/')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${port}`.yellow);
    //open(`http://localhost:${port}`);
  }
}); 