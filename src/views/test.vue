<template>
    <div>
        <div class="title">
            <label>Effect:</label>
            <select id="effects-select">
                <option value="default">default</option>
                <option value="simple">simple</option>
                <option value="left">left</option>
                <option value="up">up</option>
                <option value="leftright">leftright</option>
                <option value="updown">updown</option>
                <option value="switchlr">switchlr</option>
                <option value="switchud">switchud</option>
                <option value="fliplr">fliplr</option>
                <option value="flipud">flipud</option>
                <option value="reduce">reduce</option>
                <option value="360">360</option>
            </select>
            <div class="code">
                <code>x: 6</code>
                <code>y: 4</code>
                <code>random: true</code>
            </div>
            <button type="button" class="start action">Play</button>
            <button type="button" class="stop action">Stop</button>
        </div>

        <div class="slider-wrap">
            <div class="slider">
                <p><strong>Pig ham:</strong> hock pork loin brisket pastrami frankfurter andouille.</p>
                <img src="../img/img01.png"><p><strong>Sausage:</strong> ground round sirloin ball tip beef ribs.</p>
                <img src="../img/img02.png"><p><strong>Pig ham:</strong> hock pork loin brisket pastrami frankfurter andouille.</p>
                <img src="../img/img03.png"><p><strong>Pork turkey:</strong> shoulder, filet mignon chuck t-bone bacon.</p>
                <img src="../img/img04.png"><p><strong>Short loin:</strong> pig jowl fatback, pork loin pork chop.</p>
                <img src="../img/img05.png"><p><strong>Sausage:</strong> ground round sirloin ball tip beef ribs.</p>
                <img src="../img/img06.png"><p><strong>Pig ham:</strong> hock pork loin brisket pastrami frankfurter andouille.</p>
                <img src="../img/img07.png"><p><strong>Pork turkey:</strong> shoulder, filet mignon chuck t-bone bacon.</p>
                <img src="../img/img08.png"><p><strong>Short loin:</strong> pig jowl fatback, pork loin pork chop.</p>
                <img src="../img/img09.png"><p><strong>Sausage:</strong> ground round sirloin ball tip beef ribs.</p>
                <img src="../img/img10.png"><p><strong>Pig ham:</strong> hock pork loin brisket pastrami frankfurter andouille.</p>
            </div>
        </div>
    </div>
</template>


<script>
    import '../css/normalize.css'
    import '../css/styles.css'
    import '../css/jquery.tiles.min.css'
    require('../js/jquery-1.8.3.min')
    var s = require('../js/jquery.tiles')





    export default {
        name: "test",
        methods: {
            test_max(){
                var $slider = $('.slider-wrap');
                var html = $slider.html();

                // Options

                var defaults = {
                    thumbSize:20,
                    onSlideshowEnd:function(){
                        $('.stop, .start').toggle()
                    }
                };

                var effects = {
                    'default': { x:6, y:4, random: true },
                    simple: { x:6, y:4, effect: 'simple', random: true },
                    left: { x:1, y:8, effect: 'left' },
                    up: { x:20, y:1, effect: 'up', rewind: 60, backReverse: true },
                    leftright: { x:1, y:8, effect: 'leftright' },
                    updown: { x:20, y:1, effect: 'updown', cssSpeed: 500, backReverse: true },
                    switchlr: { x:20, y:1, effect: 'switchlr', backReverse: true },
                    switchud: { x:1, y:8, effect: 'switchud' },
                    fliplr: { x:20, y:1, effect: 'fliplr', backReverse: true },
                    flipud: { x:20, y:3, effect: 'flipud', reverse: true, rewind: 75 },
                    reduce: { x:6, y:4, effect: 'reduce' },
                    360: { x:1, y:1, effect: '360', fade: true, cssSpeed: 600 }
                };
                $('#effects-select').change(function(){
                    var effect = $(this).val();
                    $slider.fadeTo( 0,0 ).html( html );
                    $('.stop').hide();
                    $('.start').show();

                    setTimeout(function(){
                        $('.slider').tilesSlider($.extend( {}, defaults, effects[ effect ]));
                        $slider.fadeTo( 0,1 );
                        $('body').removeClass('tiles-preload');
                    }, 100 );

                    $('.code').empty().html(function() {
                        var e = effects[ effect ], c = [];
                        for ( var i in e ) {
                            if ( i !== 'effect' ) {
                                c.push('&lt;code>'+ i +': '+ e[i] +'</code>');
                            }
                        }
                        return c.join('');
                    });
                });

                $('.start').click(function() {
                    $(this).hide();
                    $('.stop').show();
                    $('.slider').tilesSlider('start');
                    console.log('ssss')
                });

                $('.stop').click(function() {
                    $(this).hide();
                    $('.start').show();
                    $('.slider').tilesSlider('stop');
                });

                $('.slider').tilesSlider( $.extend( {}, defaults, effects['default'] ) );
                }
        },
        mounted() {
            this.test_max()
        }
    }

</script>

<style scoped>

</style>
