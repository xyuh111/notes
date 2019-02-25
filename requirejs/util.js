define(function(){
    return {
        getFormatDate: function (date,type){
            var fullYear = date.getFullYear(),
                month = date.getMonth(),
                dateToday = date.getDate();
            if (type === 1){
                return `${fullYear}-${month+1}-${dateToday}`
            }
            if (type === 2){
                return `${fullYear}年${month+1}月${dateToday}日`
            }
        }
    }
})