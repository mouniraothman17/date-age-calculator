
function getDate() {
    let day = document.getElementById('d').value;
    let month = document.getElementById('m').value;
    let year = document.getElementById('y').value;

    let date = new Date();
    let day_date = date.getDay();
    let month_date = 1 + date.getMonth();
    let year_date = date.getFullYear();
    let monthArr = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
    if (day > day_date) {
        day_date = day_date + monthArr[month_date - 1]
        month_date = month_date - 1
    }

    if (month > month_date) {
        month_date = month_date + 12
        year_date = year_date - 1
    }

    let in_day = day_date - day;
    let in_month = month_date - month;
    let in_year = year_date - year;
    document.getElementById('year').innerHTML = ` <span style="color: blueviolet ;">${in_year}</span> <span style="color: black;">Years </span>`;
    document.getElementById('month').innerHTML = ` <span style="color: blueviolet ;">${in_month}</span> <span style="color: black;">Months</span>`;
    document.getElementById('day').innerHTML = ` <span style="color: blueviolet ;">${in_day}</span> <span style="color: black;">Days</span>`;

}

document.querySelector('.sub').onclick = (event) => {
    event.preventDefault()
    getDate();
    
}
