(function($) {
    $.fn.jsonify = function(options) {
        var settings = $.extend({
            stringify : false
        }, options);
        var json = {};
        $.each(this.serializeArray(), function() {
            if (this.name in json) {
                if (!json[this.name].push)
                    json[this.name] = [json[this.name]];
                json[this.name].push(this.value || '');
            } else
                json[this.name] = this.value || '';
        });
        if(settings.stringify)
            return JSON.stringify(json);
        else
            return json;
    };

    $.fn.dejsonify = function(data) {
        if (typeof data === 'string')
            data = JSON.parse(data);

        $.each(this.find('*[name]'), function() {
            var inputType = $(this).attr('type'),
                dataValue = data[$(this).attr('name')];

            if (inputType === 'radio' ||
                inputType === 'checkbox')
            {
                if ($.isArray(dataValue))
                    $(this).prop('checked', $.inArray($(this).val(), dataValue) > -1);
                else
                    $(this).prop('checked', ($(this).val() === dataValue));
            }
            else
                $(this).val(dataValue);
        });
    };
})(jQuery);
