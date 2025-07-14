let counter_home = 0
let counter_guest = 0
home = document.getElementById('count-primary')
guest = document.getElementById('count-secondary')

function one() {
    counter_home += 1
    home.innerHTML = counter_home
}
function two() {
    counter_home += 2
    home.innerHTML = counter_home
}
function three() {
    counter_home += 3
    home.innerHTML = counter_home
}
function guestone() {
    counter_guest += 1
    guest.innerHTML = counter_guest
}
function guesttwo() {
    counter_guest += 2
    guest.innerHTML = counter_guest
}
function guestthree() {
    counter_guest += 3
    guest.innerHTML = counter_guest
}
