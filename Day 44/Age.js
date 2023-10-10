function lifeInWeeks(age)
{
    let yearsLeft=90-age;
    let monthsLeft=yearsLeft*12;
    let weeksLeft=yearsLeft*52;
    let daysLeft=yearsLeft*365;

    console.log("You have "+daysLeft+"  days left and "+weeksLeft+" weeks left and "+monthsLeft+" months left.")
}

lifeInWeeks(23);