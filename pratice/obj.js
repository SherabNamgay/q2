const complicatedObject = {
	name: "John Doe",
	age: 30,
	hobbies: ["reading", "painting", "coding"],
	address: {
		street: "123 Main St",
		city: "New York",
		country: "USA"
	},
	friends: [
		{
			name: "Jane Smith",
			age: 40,
			hobbies: ["hiking", "photography"],
			address: {
				street: "456 Elm St",
				city: "Los Angeles",
				country: "USA"
			}
		},
		{
			name: "Mike Johnson",
			age: 32,
			hobbies: ["cooking", "gaming", "eating"],
			address: {
				street: "789 Oak St",
				city: "Chicago",
				country: "USA"
			}
		}
	]
};

const hobies  = complicatedObject.friends.reduce((acc, friend) =>{
    acc= acc.concat(friend.hobbies)
    return acc
},[])

// console.log(hobies)

const friends = complicatedObject.friends.reduce((acc, friend)=>{
    acc=acc.concat(" "+friend.name+",")
    return acc
},"My friends are")

// console.log(friends)

const friendsWithHighstAge = complicatedObject.friends.reduce((oldestFriend, friend)=>{
   if(friend.age > oldestFriend.age){
    return friend
   }else{
    return oldestFriend
   }
},{age:0})

console.log(friendsWithHighstAge.address)

const moreThanThreeHobbies = complicatedObject.friends.filter(friend=> friend.hobbies.length >=3).map(friend => friend.name)

// console.log (moreThanThreeHobbies)