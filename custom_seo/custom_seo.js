(function ($) {

    Drupal.behaviors.customSeo = {
        attach: function (context, settings) {
            $('.custom-seo-custom-switch').each(function () {
                var switchLink = $(this);
                if (!switchLink.hasClass('custom-seo-custom-switch-process')) {
                    switchLink.bind('click', function () {
                        var wr = $(this).parent();
                        if (wr.hasClass('custom-seo-custom-open')) {
                            wr.removeClass('custom-seo-custom-open');
                        } else {
                            wr.addClass('custom-seo-custom-open');
                        }
                        return false;
                    });
                    switchLink.addClass('custom-seo-custom-switch-process');
                }
            });

            $('.custom-seo-trigger-wr', context).each(function () {
                if (!$(this).hasClass('custom-seo-trigger-wr-process')) {
                    var contThis = $(this);
                    var swiTh = $('legend:first', contThis);
                    swiTh.bind('click', function () {
                        if (contThis.hasClass('custom-seo-trigger-wr-close')) {
//do open
                            contThis.removeClass('custom-seo-trigger-wr-close');

                        } else {
//do close
                            contThis.addClass('custom-seo-trigger-wr-close');
                        }

                    });
                    contThis.addClass('custom-seo-trigger-wr-process');
                }
            });
        }
    };

})(jQuery);