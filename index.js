console.log("here");
const clients = ["Bigcorp"
,
"Bigcorp"
,
"Acme"
,
"Bigcorp"
,
"Zork"
,
"Zork"
,
"Abc"
,
"Bigcorp"
,
"Acme"
,
"Bigcorp"
,
"Bigcorp"
,
"Zork"
,
"Bigcorp"
,
"Zork"
,
"Zork"
,
"Bigcorp"
,
"Acme"
,
"Bigcorp"
,
"Acme"
,
"Bigcorp"
,
"Acme"
,
"Littlecorp"
,
"Nadircorp"]


	const map1 = new Map();

	let len = clients.length;
	//console.log(len);

	for(let i=0;i<len;i++)
	{
		if(map1.has(clients[i])){
			map1.set(clients[i],(map1.get(clients[i]) +1))
		}else{
			map1.set(clients[i], 1);
		}
	}

//	console.log(map1);
	//console.log(typeof(map1));
	
	let ans  = [];

	//console.log(ans);

	map1.forEach((value,key) => {
		//console.log(value + " " + key);

		if((value/len)*100 > 7)
		{
			ans.push(key);
		}

	})
	ans.sort();
	console.log(ans);

	let list = document.createElement("ul");

	ans.map((ele)=>{
		let temp = document.createElement('li');
		temp.innerHTML =ele;

		list.append(temp);

	});
	console.log(list);

	document.getElementById("a1").append(list);