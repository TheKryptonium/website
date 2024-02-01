const hash = window.location.hash

var afficherOnglet = function($a ,duration){
   
    if(duration===undefined){
        duration=500
    }
    var $li = $a.parent() 

    if($li.hasClass('active')){
        return false
    }
    $target = $($a.attr('href'))

    $li.siblings('.active').removeClass('active')
    $li.addClass('active')  
    
    $target.addClass('active')
    $target.siblings('.active').removeClass('active')
    $target.siblings(':visible').fadeOut(500, function(){
        $target.fadeIn(500)
    })
    
}
var afficherOnglet2 = function($a ,duration){
    if(duration===undefined){
        duration=500
    }
    var $li = $($a.parentElement)

    if($li.hasClass('active')){
        return false
    }
    $target = $($a.hash)

    $li.siblings('.active').removeClass('active')
    $li.addClass('active')  
    
    $target.addClass('active')
    $target.siblings('.active').removeClass('active')
    $target.siblings(':visible').fadeOut(500, function(){
        $target.fadeIn(500)
    })
    
}


$('.tabs a').click(function(e){
    e.preventDefault() 
  
    var $a = (afficherOnglet($(this)))
})

$('.corpus').click(function(e){
    e.preventDefault()
    
    $tabsa=$('.tabs a')
    for(let $tabs of $('.tabs a')){
        if($(this).attr('href')===$tabs.hash){
            console.log($tabs)
            var $a=(afficherOnglet2($tabs))
        }
    }

})



if(hash=!''){
    console.log(hash)
    var $a = $('.tabs a[href="'+ hash +'"]')
    if($a.length>0){
        afficherOnglet($a, 0)
    }
}


