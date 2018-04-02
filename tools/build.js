import webpack from 'webpack';
import webpackConfig from '../webpack.prod';
import colors from 'colors';
import fs from 'fs';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) { // so a fatal error occurred. Stop here.
        console.log(err.bold.red);
        return 1;
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    const dir = './dist/assets/';
    const subdirs = ['', 'styles/', 'images/'];

    subdirs.forEach((sdir) => {
        if (!fs.existsSync(dir + sdir)) {
            fs.mkdirSync(dir + sdir);
        }
    });

    //fs.createReadStream('src/index.html').pipe(fs.createWriteStream('dist/index.html'));
    fs.createReadStream('src/assets/styles/style.css').pipe(fs.createWriteStream('dist/assets/styles/style.css'));

    console.log('index.html and asssets written to /dist'.blue);

    console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.blue);

    return 0;
});