function onKeyPressed() {
    let begin = document.getElementById('input-date-from').value;
    let end = daysjs(document.getElementById('input-date-to').value).hour(23).minute(59);
    let numberHours = Number.parseInt(document.getElementById('input-hours').value);
    let forMinutes = Number.parseInt(document.getElementById('input-n-minutes').value);

    let calendar = ics();
    let rule = {
        freq: 'WEEKLY',
        byday: ['MO', 'TU', 'WE', 'TH', 'FR'],
        until: end
    };
    let begin_date = dayjs(begin)
    let hour_minute = document.getElementById('input-start-time').value.split(':');
    begin_date = begin_date.hour(Number.parseInt(hour_minute[0]));
    begin_date = begin_date.minute(Number.parseInt(hour_minute[1]));
    for(let i=0; i < numberHours; i++) {
        beginTime = begin_date.add(i, 'hour');
        endTime = begin_date.add(i, 'hour').add(forMinutes, 'minute');
        console.log(beginTime, endTime);
        calendar.addEvent("Rest your eyes!", "They'll be grateful to you", null, beginTime, endTime, rule);
    }
    calendar.download('freeyes')

    /*
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("ICS DATA HERE"));
    element.setAttribute('download', "freeyes.ics");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
     */
}