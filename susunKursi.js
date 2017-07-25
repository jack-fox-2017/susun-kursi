// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) { // untuk nilai dari "function generateSeats(row) = kosong"
	let seats = []
	for(let i=0; i<row; i++) { // change "rowa" to "row"
		seats.push([]) // change "seat" to "seats"
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) // change generateSeat to "generateSeats"
	let row = 0

	for(let i=0; i<arr.length; i++) { // change i<arr.length-1 to "change i<arr.length"
		seats[row].push(arr[i]) // change seat to seats
		if(row < rowSeats - 1) {
				row++
		} else {
			row = 0 //change "equal operator" to Assingment operator
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) {  // change let i=1  to --> "let i = 0"
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
