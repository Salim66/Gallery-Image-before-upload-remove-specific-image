(function($){
    $(document).ready(function(){


        $('#gallery_image').change(function(e){
            const image_length = e.target.files.length;
            for(var i=0; i<image_length; i++){
                const image_url = URL.createObjectURL(e.target.files[i])
                const image_tag = $($.parseHTML('<img class="appendedImg">')).attr('src', image_url)
                const image_surrent_div = $($.parseHTML('<div class="shadow imgHolder"></div>')).html(image_tag);
                image_surrent_div.append('<span class="closeIT_removeImg">x</span>')
                $('#showImage').append(image_surrent_div);

                setTimeout(function(){
                    const closeIT_removeImg = document.getElementsByClassName('closeIT_removeImg')
                    arrayFromCloseBtn = [...closeIT_removeImg]
                    arrayFromCloseBtn.forEach(onebyone => {
                        onebyone.addEventListener('click', function(e){
                            if(e.target.classList[0] == 'closeIT_removeImg'){
                                const closeIT_removeImg = e.target;
                                closeIT_removeImg.parentElement.remove();
                            }
                        });
                    });
                }, 500)
            }
        });



    });
})(jQuery);
