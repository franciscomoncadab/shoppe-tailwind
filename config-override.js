module.exports = {
     webpack(config, env) {
       console.log('env', env);
   ​
       config.module.rules.push(
         {
           test: /\.(ttf|eot|svg)$/,
           use: 'file-loader?name=[name].[ext]',
           exclude: /\.inline.svg$/,
         },
         {
           test: /\.inline.svg$/,
           use: 'svgr/webpack',
         },
       );
   ​
       return config;
     },
   };
   