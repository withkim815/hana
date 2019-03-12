var Color = {
    'toNight':function(){
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'white';
        var as = document.querySelectorAll('a');
        var i;
        for( i=0; i<as.length; i++ )
        {
            as[i].style.color = 'white';
        }
    },
    'toDay':function(){
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black';
        var as = document.querySelectorAll('a');
        var i;
        for( i=0; i<as.length; i++ )
        {
            as[i].style.color = 'black';
        }
    }
}
