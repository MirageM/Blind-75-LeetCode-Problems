/*
Enter your query here.
*/
SELECT DISTINCT(CITY)
FROM STATION
WHERE CITY regexp "^A|^E|^I|^O|^U";