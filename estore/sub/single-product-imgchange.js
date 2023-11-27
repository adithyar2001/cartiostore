$(document).ready(function(){
    $('#single-small-img-1').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-1').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-1').attr('src',firstimg)
    }) 
    $('#single-small-img-2').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-2').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-2').attr('src',firstimg)
    })
    $('#single-small-img-3').click(function(){
        var firstimg = $('#single-product-img').attr('src')
        var secondimg = $('#single-small-img-3').attr('src')
        $('#single-product-img').attr('src',secondimg)
        $('#single-small-img-3').attr('src',firstimg)
    })
})