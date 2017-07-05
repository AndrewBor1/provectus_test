'use script';
$(function() {
    
    function findElem(arr) {
        var key = arr[0],
            flag = 0;
        for (var i = 1; i < arr.length; i++) {
            if (key.length === arr[i].length) {
                var matches = 0;
                for (var j = 0; j < key.length; j++) {
                    if (arr[i].indexOf(key[j]) + 1) {
                        matches++;
                    }
                }
                if (matches < key.length) {
                    if (flag === 1) {
                        return 0;
                    }
                    if (i === 1) {
                        flag = 1;
                    }
                    else {
                        return i;
                    }
                }
                else {
                    if (flag === 1) {
                        return i-1;
                    }
                }
            }
            else {
                if (flag === 1) {
                    return 0;
                }
                if (i === 1) {
                    flag = 1;
                }
                else {
                    return i;
                }
            }
        }
    }
    
    /* CLASS NAMESPACE */
    var classNamespace = {
        
        // ADD NEW STRING
        addString: function() {
            var $labelContainer = $('.strings', '#Main');
            $labelContainer.append("<label>Строка: <input type='text'/></label>");
        },
        
        // REMOVE LAST STRING
        removeString: function() {
            var $labels = $('label', '#Main .strings');
            if ($labels.length > 3) {
                $($labels[$labels.length - 1]).remove();
            }
        },
        
        // SHOW RESULT
        showResult: function() {
            var $inputs = $('input', '#Main .strings'),
                $resultContainer = $('h1', '#Main .result'),
                arrayOrig = [],
                arrayNoSpace = [],
                result;
            for (var i = 0; i < $inputs.length; i++) {
                arrayOrig.push($($inputs[i]).val());
                arrayNoSpace.push($($inputs[i]).val().replace(/\s+/g, ''));
            }
            result = arrayOrig[findElem(arrayNoSpace)];
            $resultContainer.html("Строка: '" + result + "' лишняя!");
            if ($resultContainer.css("display") === "none") {
                $resultContainer.fadeIn('slow');
            }
        }
    };
    
    /* EVENTS */
    
    // FIND STRING BTN
    $('#FindStr').on('click', classNamespace.showResult);
    
    // ADD STRING BTN
    $('#AddStr').on('click', classNamespace.addString);
    
    // ADD STRING BTN
    $('#RmStr').on('click', classNamespace.removeString);
});