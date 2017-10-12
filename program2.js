let sumarum = process.argv.slice(2)
   console.log(
    sumarum.reduce(function(x,y){
        return Number(x) + Number(y)
    },0)
)