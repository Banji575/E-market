const categoryBtn = document.querySelector('.category__btn');
const categoryModal = document.querySelector('.categoryAll');
const brand = document.querySelectorAll('.categoryAll__brand-item > a')

const modelList = {
    diesel: {
        1: 'diesel dz 1205',
        2: 'diesel dz 1206',
        3: 'diesel dz 1207',
        4: 'diesel dz 1208',
        5: 'diesel dz 1209',
        6: 'diesel dz 1210',
        7: 'diesel dz 1211',
        8: 'diesel dz 1212',
    },
    'casio': {
        1: 'casio dz 1205',
        2: 'casio dz 1206',
        3: 'casio dz 1207',
        4: 'casio dz 1208',
        5: 'casio dz 1209',
        6: 'casio dz 1210',
        7: 'casio dz 1211',
        8: 'casio dz 1212',
    },
    hugo_boss: {
        1: 'hugo boss dz 1205',
        2: 'hugo boss dz 1206',
        3: 'hugo boss dz 1207',
        4: 'hugo boss dz 1208',
        5: 'hugo boss dz 1209',
        6: 'hugo boss dz 1210',
        7: 'hugo boss dz 1211',
        8: 'hugo boss dz 1212',
    },
    jowissa: {
        1: 'jowissa dz 1205',
        2: 'jowissa dz 1206',
        3: 'jowissa dz 1207',
        4: 'jowissa dz 1208',
        5: 'jowissa dz 1209',
        6: 'jowissa dz 1210',
        7: 'jowissa dz 1211',
        8: 'jowissa dz 1212',
    },
    lee_cooper: {
        1: 'lee cooper dz 1205',
        2: 'lee cooper dz 1206',
        3: 'lee cooper dz 1207',
        4: 'lee cooper dz 1208',
        5: 'lee cooper dz 1209',
        6: 'lee cooper dz 1210',
        7: 'lee cooper dz 1211',
        8: 'lee cooper dz 1212',
    },
    orient: {
        1: 'orient dz 1205',
        2: 'orient dz 1206',
        3: 'orient dz 1207',
        4: 'orient dz 1208',
        5: 'orient dz 1209',
        6: 'orient dz 1210',
        7: 'orient dz 1211',
        8: 'orient dz 1212',
    }
}

const pointActive = (el) => {
    el.classList.toggle('categoryAll--active')
    const brandModelList = el.textContent;
    console.log('casio' === brandModelList)
}


categoryBtn.addEventListener('click', (evt) => {
    categoryModal.classList.toggle('categoryAll--open')
    brand.forEach(el => {
        el.addEventListener('mouseover', pointActive.bind(null, el))
        el.addEventListener('mouseout', pointActive.bind(null, el))
    })
})


$(function () {
    $('.hide').hide();
    $star = $('.recomend__more svg')
    console.log($star[0])
    $item = $('.recomend__item');
    $item.on('click', function (evt) {
        $(this).children('.recomend__more').slideToggle(500)
    })

    $star.on('click', function (evt) {
        event.stopPropagation();
        $thisStar = $(this).parent().children()
        console.log($thisStar)
        $thisStar.each(function (i, el) {
            $(el).css('fill', 'rgb(189, 189, 189)')
        })
        $(this).css('fill', 'rgb(255, 0, 0)')
        $thisStar.each(function (i, el) {
            if ($(el).css('fill') != 'rgb(255, 0, 0)') {
                $(el).css('fill', 'red')
            } else {
                
                return false
            }

        })

    })
 
    


})